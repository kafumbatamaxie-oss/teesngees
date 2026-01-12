import { useEffect } from "react";
import privacyHero from "@/assets/terms-hero.jpg"; // replace or reuse termsHero if needed
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <CartDrawer />
        <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden">
            {/* Background image */}
            <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${privacyHero})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />

            {/* Content */}
            <div className="relative mx-auto max-w-5xl px-6 py-24">
            <h1 className="font-display text-4xl md:text-5xl animate-slide-up">
                Privacy, Returns &amp; Exchanges
            </h1>
            <p className="mt-4 max-w-3xl text-muted-foreground animate-fade-in">
                At <strong>TEES &amp; GEES</strong>, transparency matters. Please read
                the information below carefully before placing your order.
            </p>
            </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-5xl px-6 py-16 space-y-12">
            <Block title="Strengthened Returns & Exchanges Policy">
            <p className="font-medium">Returns – Strict Conditions</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>
                Returns are accepted within 7 calendar days of delivery, in
                accordance with the South African Consumer Protection Act.
                </li>
                <li>
                Items must be unworn, unwashed, unused, and in original condition,
                with all tags and packaging intact.
                </li>
                <li>
                Items showing wear, washing, odour, damage, alteration, or misuse
                will be rejected and returned at the customer’s expense.
                </li>
            </ul>
            </Block>

            <Block title="Non-Returnable Items">
            <ul className="list-disc pl-5 space-y-2">
                <li>
                Sale, clearance, or promotional items are final sale unless
                defective.
                </li>
                <li>
                Custom, limited-edition, or special-release items may not be
                eligible for return unless faulty.
                </li>
            </ul>
            </Block>

            <Block title="Size-Related Returns">
            <ul className="list-disc pl-5 space-y-2">
                <li>
                Customers are responsible for selecting the correct size using the
                Size Guide.
                </li>
                <li>
                Size-related returns are accepted once per order only and subject
                to availability.
                </li>
                <li>
                Shipping costs for size-related returns are non-refundable and
                covered by the customer.
                </li>
            </ul>
            </Block>

            <Block title="Faulty or Incorrect Items">
            <ul className="list-disc pl-5 space-y-2">
                <li>
                Claims must be reported within 48 hours of delivery with clear
                photographic evidence.
                </li>
                <li>
                Approved faulty-item returns may be repaired, replaced, or refunded
                at our discretion.
                </li>
            </ul>
            </Block>

            <Block title="International Shipping">
            <ul className="list-disc pl-5 space-y-2">
                <li>TEES &amp; GEES ships internationally to selected countries.</li>
                <li>
                Delivery times vary due to destination, customs, and courier
                processing.
                </li>
                <li>
                Customers are responsible for customs duties, import taxes, and
                clearance fees.
                </li>
                <li>
                We are not responsible for delays, seizures, or charges imposed by
                customs authorities.
                </li>
                <li>International shipping fees are non-refundable.</li>
            </ul>
            </Block>

            <Block title="Privacy Policy (POPIA-Compliant)">
            <p>
                TEES &amp; GEES collects and processes personal information strictly
                for:
            </p>
            <ul className="list-disc pl-5 space-y-2">
                <li>Order processing and fulfilment</li>
                <li>Customer communication and support</li>
                <li>Legal and accounting requirements</li>
            </ul>
            <p className="mt-4">
                We do not sell, rent, or trade personal information. Customer data is
                shared only with:
            </p>
            <ul className="list-disc pl-5 space-y-2">
                <li>Payment gateways</li>
                <li>Courier and logistics partners</li>
                <li>Essential website service providers</li>
            </ul>
            <p className="mt-4">
                All data is handled in accordance with the Protection of Personal
                Information Act (POPIA). Customers may request access, correction, or
                deletion of their data, subject to legal requirements.
            </p>
            </Block>

            <Block title="Returns & Refunds">
            <p className="font-medium">Returns</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>Accepted within 7 days of delivery.</li>
                <li>
                Items must be unworn, unwashed, and in original condition with tags
                attached.
                </li>
                <li>Sale or discounted items are final sale unless faulty.</li>
            </ul>

            <p className="mt-4 font-medium">Exchanges</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>Subject to stock availability.</li>
                <li>
                Customers cover return shipping unless the item is faulty or
                incorrect.
                </li>
            </ul>

            <p className="mt-4 font-medium">Refunds</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>
                Refunds are processed to the original payment method after
                inspection.
                </li>
                <li>Shipping fees are non-refundable.</li>
                <li>Processing times vary by payment provider.</li>
            </ul>
            </Block>

            <Block title="Size Advice">
            Our garments are slim-fit. Please consult the Size Guide before
            ordering. If you prefer a relaxed fit, we recommend choosing one size
            up. If you’re unsure, contact us before placing your order — we’re happy
            to help.
            </Block>

            <Block title="Final Legal Note">
            These policies are designed to protect both our customers and our brand
            while ensuring fairness, transparency, and product integrity.
            </Block>
        </section>
        </main>
        <Footer />
    </div>
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
