import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import crypto from "crypto"; // Supabase Edge allows Node-style crypto

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

/* -----------------------
   Types
------------------------ */
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
  sandbox?: boolean;
}

/* -----------------------
   MD5 helper
------------------------ */
const md5 = (input: string) => {
  return crypto.createHash("md5").update(input).digest("hex");
};

/* -----------------------
   Signature generator
   EXACTLY like Next.js 16
------------------------ */
const generateSignature = (data: Record<string, string>, passphrase?: string) => {
  let pfOutput = "";

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      if (value !== "") {
        pfOutput += `${key}=${encodeURIComponent(value.trim()).replace(/%20/g, "+")}&`;
      }
    }
  }

  let stringToHash = pfOutput.slice(0, -1);

  if (passphrase) {
    stringToHash += `&passphrase=${encodeURIComponent(passphrase.trim()).replace(/%20/g, "+")}`;
  }

  return md5(stringToHash);
};

/* -----------------------
   Edge Function Handler
------------------------ */
serve(async (req: Request) => {
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

    // Credentials
    const merchantId = sandbox
      ? Deno.env.get("PAYFAST_SANDBOX_MERCHANT_ID") || "10000100"
      : Deno.env.get("PAYFAST_MERCHANT_ID")!;
    const merchantKey = sandbox
      ? Deno.env.get("PAYFAST_SANDBOX_MERCHANT_KEY") || "46f0cd694581a"
      : Deno.env.get("PAYFAST_MERCHANT_KEY")!;
    const passphrase = sandbox
      ? "" // sandbox passphrase empty
      : Deno.env.get("PAYFAST_PASSPHRASE") || "";

    // Total
    const totalAmount = items
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
      .toFixed(2);

    const paymentId = `TG-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    const itemDescription = items
      .map(i => `${i.name} (${i.size}, ${i.color}) x${i.quantity}`)
      .join(", ")
      .substring(0, 255);

    // PAYFAST POST DATA
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
      item_name: `Order #${paymentId.substring(0, 8)}`,
      item_description: itemDescription,
    };

    // Signature (merchant_key NOT included)
    const signatureData = { ...payfastData };
    delete signatureData.merchant_key;
    payfastData.signature = generateSignature(signatureData, passphrase);

    const payfastHost = sandbox ? "sandbox.payfast.co.za" : "www.payfast.co.za";

    return new Response(
      JSON.stringify({
        success: true,
        paymentId,
        payfastUrl: `https://${payfastHost}/eng/process`,
        payfastData,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (err: any) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("PayFast Edge Function Error:", message);
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
