import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface CartItem {
  name: string;
  quantity: number;
  price: number;
  size: string;
  color: string;
}

interface PaymentRequest {
  items: CartItem[];
  customerEmail: string;
  customerFirstName: string;
  customerLastName: string;
  returnUrl: string;
  cancelUrl: string;
  notifyUrl: string;
  sandbox?: boolean; // optional, default true
}

// MD5 via Web Crypto
async function md5(string: string): Promise<string> {
  const buffer = new TextEncoder().encode(string);
  const hashBuffer = await crypto.subtle.digest("MD5", buffer);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      items,
      customerEmail,
      customerFirstName,
      customerLastName,
      returnUrl,
      cancelUrl,
      notifyUrl,
      sandbox = true,
    }: PaymentRequest = await req.json();

    if (!items || items.length === 0) {
      throw new Error("Cart is empty");
    }

    // --- Credentials from env or sandbox defaults ---
    const merchantId = sandbox
      ? Deno.env.get("PAYFAST_SANDBOX_MERCHANT_ID") || "10000100"
      : Deno.env.get("PAYFAST_MERCHANT_ID");
    const merchantKey = sandbox
      ? Deno.env.get("PAYFAST_SANDBOX_MERCHANT_KEY") || "46f0cd694581a"
      : Deno.env.get("PAYFAST_MERCHANT_KEY");
    const passphrase = sandbox
      ? Deno.env.get("PAYFAST_SANDBOX_PASSPHRASE") || ""
      : Deno.env.get("PAYFAST_PASSPHRASE") || "";

    if (!merchantId || !merchantKey) throw new Error("PayFast credentials not set");

    // --- Calculate total ---
    const totalAmount = items
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);

    const paymentId = `TG-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;

    const itemDescription = items
      .map((i) => `${i.name} (${i.size}, ${i.color}) x${i.quantity}`)
      .join(", ")
      .substring(0, 255);

    const payfastData: Record<string, string> = {
      merchant_id: merchantId,
      merchant_key: merchantKey,
      return_url: returnUrl,
      cancel_url: cancelUrl,
      notify_url: notifyUrl,
      name_first: customerFirstName,
      name_last: customerLastName,
      email_address: customerEmail,
      m_payment_id: paymentId,
      amount: totalAmount,
      item_name: `Tees & Gees Order #${paymentId.substring(0, 8)}`,
      item_description: itemDescription,
    };

    // Ordered keys for signature
    const keys = [
      "merchant_id",
      "merchant_key",
      "return_url",
      "cancel_url",
      "notify_url",
      "name_first",
      "name_last",
      "email_address",
      "m_payment_id",
      "amount",
      "item_name",
      "item_description",
    ];

    // Build signature string
    let signatureString = keys
      .filter((key) => payfastData[key] !== "")
      .map((key) => `${key}=${encodeURIComponent(payfastData[key]).replace(/%20/g, "+")}`)
      .join("&");

    if (passphrase) {
      signatureString += `&passphrase=${encodeURIComponent(passphrase).replace(/%20/g, "+")}`;
    }

    payfastData.signature = await md5(signatureString);

    const payfastHost = sandbox ? "sandbox.payfast.co.za" : "www.payfast.co.za";

    console.log("PayFast payment created:", { paymentId, totalAmount, sandbox });

    return new Response(
      JSON.stringify({
        success: true,
        paymentId,
        payfastUrl: `https://${payfastHost}/eng/process`,
        payfastData,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("PayFast error:", errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
