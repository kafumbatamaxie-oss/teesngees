import { useEffect } from "react";
import termsHero from "@/assets/terms-hero.jpg";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
    <section className="relative overflow-hidden">
    {/* Background image */}
    <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${termsHero})` }}
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />

    {/* Content */}
    <div className="relative mx-auto max-w-5xl px-6 py-24">
        <h1 className="font-display text-4xl md:text-5xl animate-slide-up">
        Terms & Conditions
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground animate-fade-in">
        Welcome to <strong>TEES &amp; GEES</strong>. By accessing or purchasing
        from our website, you agree to the following Terms and Conditions.
        </p>
    </div>
    </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        <Block title="1. About Us">
          TEES &amp; GEES is a proudly South African clothing brand based in Cape
          Town. All products are designed and manufactured locally.
        </Block>

        <Block title="2. Products & Availability">
          <ul className="list-disc pl-5 space-y-2">
            <li>All products are subject to availability.</li>
            <li>
              Product images, colours, and descriptions are shown as accurately
              as possible; slight variations may occur due to manufacturing and
              screen printing.
            </li>
            <li>Measurements may vary by ±1–2 cm as outlined in our Size Guide.</li>
          </ul>
        </Block>

        <Block title="3. Pricing & Payment">
          <ul className="list-disc pl-5 space-y-2">
            <li>All prices are displayed in South African Rand (ZAR).</li>
            <li>Prices may change without prior notice.</li>
            <li>Payment must be made in full before orders are processed.</li>
            <li>
              Secure third-party payment gateways are used. TEES &amp; GEES does
              not store payment details.
            </li>
          </ul>
        </Block>

        <Block title="4. Orders & Order Confirmation">
          <ul className="list-disc pl-5 space-y-2">
            <li>Order confirmation will be sent via email.</li>
            <li>
              Confirmation does not guarantee acceptance; orders may be cancelled
              due to stock issues, pricing errors, or suspected fraud.
            </li>
          </ul>
        </Block>

        <Block title="5. Shipping & Delivery">
          <ul className="list-disc pl-5 space-y-2">
            <li>Orders are processed within the stated processing time.</li>
            <li>Delivery times are estimates and may vary.</li>
            <li>
              TEES &amp; GEES is not responsible for courier delays or
              circumstances beyond our control.
            </li>
            <li>
              Risk passes to the customer once the order is handed to the courier.
            </li>
          </ul>
        </Block>

        <Block title="6. Returns & Exchanges">
          <p className="font-medium">Returns</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Accepted within 7 days of delivery.</li>
            <li>Items must be unworn, unwashed, and in original condition.</li>
            <li>Sale or discounted items may not be eligible unless defective.</li>
          </ul>

          <p className="mt-4 font-medium">Exchanges</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Subject to stock availability.</li>
            <li>
              Customers cover return shipping unless the item is faulty or
              incorrect.
            </li>
          </ul>

          <p className="mt-4 font-medium">Non-Returnable Items</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Items showing wear, washing, or misuse will be rejected.</li>
          </ul>
        </Block>

        <Block title="7. Sizing & Fit Disclaimer">
          <ul className="list-disc pl-5 space-y-2">
            <li>Garments are slim-fit unless stated otherwise.</li>
            <li>Customers are responsible for selecting the correct size.</li>
            <li>Size-related returns may incur shipping costs.</li>
          </ul>
        </Block>

        <Block title="8. Care Instructions">
          Please follow care instructions provided with each garment. TEES &amp;
          GEES is not responsible for damage caused by incorrect care.
        </Block>

        <Block title="9. Intellectual Property">
          All website content, including logos, designs, text, and images, is the
          property of TEES &amp; GEES and may not be used without written
          permission.
        </Block>

        <Block title="10. Privacy & Personal Information">
          Personal information is handled in accordance with the Protection of
          Personal Information Act (POPIA) and used only for order processing,
          support, and service improvement.
        </Block>

        <Block title="11. Limitation of Liability">
          Liability is limited to the value of the purchased product. TEES &amp;
          GEES is not responsible for indirect or consequential damages.
        </Block>

        <Block title="12. Governing Law">
          These Terms are governed by the laws of the Republic of South Africa,
          and disputes fall under South African courts.
        </Block>

        <Block title="13. Changes to These Terms">
          TEES &amp; GEES may update these Terms at any time. Continued use of the
          website constitutes acceptance of changes.
        </Block>

        <Block title="14. Contact Information">
          For questions or support, please contact us using the details provided
          on our website.
        </Block>

        <Block title="Final Legal Note">
          These policies are designed to protect both our customers and our brand
          while ensuring fairness, transparency, and product integrity.
        </Block>
      </section>
    </main>
  );
}

/* ---------------------------------- */
/* Reusable section block */
/* ---------------------------------- */

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4 animate-slide-up">
      <h2 className="font-display text-xl md:text-2xl tracking-tight">
        {title}
      </h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
