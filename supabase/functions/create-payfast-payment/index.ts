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
}

// Use Web Crypto MD5 (safe)
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
    // --- SANDBOX credentials ---
    const merchantId = "10000100";
    const merchantKey = "46f0cd694581a";
    const passphrase = ""; // No passphrase for sandbox

    const {
      items,
      customerEmail,
      customerFirstName,
      customerLastName,
      returnUrl,
      cancelUrl,
      notifyUrl,
    }: PaymentRequest = await req.json();

    if (!items || items.length === 0) {
      throw new Error("Cart is empty");
    }

    // --- Calculate total ---
    const totalAmount = items
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);

    // --- Unique payment ID ---
    const paymentId = `TG-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;

    // --- Item description ---
    const itemDescription = items
      .map((item) => `${item.name} (${item.size}, ${item.color}) x${item.quantity}`)
      .join(", ")
      .substring(0, 255);

    // --- PayFast data (fixed order) ---
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

    // --- Parameter order required by PayFast ---
    const payfastOrderedKeys = [
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

    // --- Generate signature ---
    const signatureString = payfastOrderedKeys
      .filter((key) => payfastData[key] !== "")
      .map(
        (key) =>
          `${key}=${encodeURIComponent(payfastData[key]).replace(/%20/g, "+")}`
      )
      .join("&");

    payfastData.signature = await md5(signatureString);

    // --- Always use sandbox host ---
    const payfastHost = "sandbox.payfast.co.za";

    console.log("PayFast payment created:", { paymentId, totalAmount, sandbox: true });

    return new Response(
      JSON.stringify({
        success: true,
        paymentId,
        payfastUrl: `https://${payfastHost}/eng/process`,
        payfastData,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error creating PayFast payment:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
