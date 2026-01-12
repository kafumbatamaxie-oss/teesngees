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
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground animate-fade-in">
            <strong>T’s &amp; G’s (Tees &amp; Gees)</strong> is committed to
            protecting your personal information in accordance with the
            Protection of Personal Information Act, 4 of 2013 (POPIA).
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        <Block title="Overview">
          This Privacy Policy explains what personal information we collect, how
          it is used, stored, and protected, and your rights when interacting
          with our online shop, physical store, website, WhatsApp, email, and
          related services.
        </Block>

        <Block title="1. Personal Information We Collect">
          <p className="font-medium">1.1 Information You Provide Directly</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Full name and surname</li>
            <li>Email address</li>
            <li>Mobile or telephone number</li>
            <li>Delivery and billing address</li>
            <li>Order details and purchase history</li>
            <li>Account login details (if applicable)</li>
            <li>
              Messages sent via website contact forms, email, WhatsApp, or social
              media direct messages
            </li>
          </ul>

          <p className="mt-4 font-medium">
            1.2 Automatically Collected Information
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>IP address</li>
            <li>Browser type and device information</li>
            <li>Pages visited and time spent on the site</li>
            <li>Referring websites or links</li>
            <li>Cookies and tracking data</li>
          </ul>

          <p className="mt-4 font-medium">1.3 Payment Information</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>We do not store full card or payment details.</li>
            <li>
              Payments are processed securely via third-party payment gateways.
            </li>
          </ul>
        </Block>

        <Block title="2. How We Use Your Personal Information">
          <ul className="list-disc pl-5 space-y-2">
            <li>Processing and fulfilling orders</li>
            <li>
              Communicating order confirmations, delivery updates, and support
              queries
            </li>
            <li>Providing customer service and after-sales support</li>
            <li>
              Sending marketing communications (only where consent has been
              given)
            </li>
            <li>Improving our products, services, and website experience</li>
            <li>Preventing fraud and ensuring transaction security</li>
            <li>Complying with legal and regulatory obligations</li>
          </ul>
        </Block>

        <Block title="3. Marketing & Communication">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Marketing emails, SMS, or WhatsApp messages are sent only where you
              have opted in or where permitted by law.
            </li>
            <li>
              You may opt out at any time by unsubscribing, replying “STOP”, or
              contacting us directly.
            </li>
            <li>
              Transactional messages such as order confirmations and receipts
              are mandatory to fulfil purchases.
            </li>
          </ul>
        </Block>

        <Block title="4. Third-Party Service Providers">
          <p>
            We may share limited personal information with trusted third parties
            where necessary, including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Payment gateways</li>
            <li>Courier and logistics partners</li>
            <li>Website hosting and ecommerce platforms</li>
            <li>Email, SMS, and WhatsApp communication tools</li>
            <li>Analytics and marketing platforms</li>
          </ul>
          <p className="mt-4">
            All third parties are required to handle personal information
            securely, use it only for the agreed purpose, and comply with POPIA
            and applicable data protection laws.
          </p>
        </Block>

        <Block title="5. POPIA Compliance & Lawful Processing">
          <ul className="list-disc pl-5 space-y-2">
            <li>Processed lawfully and transparently</li>
            <li>Collected for specific, explicitly defined purposes</li>
            <li>Adequate, relevant, and not excessive</li>
            <li>Accurate and kept up to date</li>
            <li>
              Stored securely and retained only for as long as necessary
            </li>
          </ul>
          <p className="mt-4">
            Reasonable technical and organisational safeguards are implemented to
            prevent loss, unauthorised access, or unlawful processing.
          </p>
        </Block>

        <Block title="6. Your Rights as a Data Subject">
          <ul className="list-disc pl-5 space-y-2">
            <li>Request access to your personal information</li>
            <li>Request correction or updating of your information</li>
            <li>
              Request deletion of personal information (subject to legal
              requirements)
            </li>
            <li>Object to the processing of your information</li>
            <li>Withdraw consent for marketing communications</li>
            <li>
              Lodge a complaint with the Information Regulator of South Africa
            </li>
          </ul>
        </Block>

        <Block title="7. Cookies & Website Tracking">
          <p>
            Our website uses cookies to improve functionality, analyse traffic,
            and remember user preferences. You may disable cookies in your
            browser settings, although some features may not function correctly.
          </p>
        </Block>

        <Block title="8. Data Retention">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Data is retained only for as long as required to fulfil its purpose
            </li>
            <li>
              Retained to meet legal, tax, and accounting obligations
            </li>
            <li>
              Securely deleted or anonymised when no longer required
            </li>
          </ul>
        </Block>

        <Block title="9. Links to Other Websites">
          Our website may contain links to third-party websites. We are not
          responsible for their privacy practices and encourage you to review
          their policies independently.
        </Block>

        <Block title="10. Changes to This Privacy Policy">
          This Privacy Policy may be updated from time to time. Any changes will
          be published on this page with an updated revision date.
        </Block>

        <Block title="11. Contact Details">
          <p className="font-medium">T’s &amp; G’s (Tees &amp; Gees)</p>
          <ul className="list-none space-y-1">
            <li>Email: info@teesandgees.co.za</li>
            <li>WhatsApp: Official business number</li>
            <li>Location: Cape Town, South Africa</li>
          </ul>
        </Block>

        <Block title="Final Legal Note">
          This Privacy Policy forms part of, and should be read together with,
          our Terms &amp; Conditions.
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
