import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Package,
  Truck,
  BadgePercent,
  Users,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import DeliveryMarquee from "@/components/DeliveryMarquee";

const Partner = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: howItWorksRef, isVisible: howItWorksVisible } = useScrollAnimation();
  const { ref: requirementsRef, isVisible: requirementsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const benefits = [
    {
      icon: BadgePercent,
      title: "Wholesale Pricing",
      description:
        "Competitive bulk pricing on all in-stock map T-shirt designs. Orders start from 50 units, with better margins at higher volumes.",
    },
    {
      icon: Truck,
      title: "Fast Local Fulfilment",
      description:
        "Cape Town–based fulfilment ensures quick turnaround and reliable delivery across South Africa.",
    },
    {
      icon: Package,
      title: "Ready-to-Sell Stock",
      description:
        "All wholesale items are pre-printed and quality checked, so you can order and sell immediately.",
    },
    {
      icon: Users,
      title: "Retailer Support",
      description:
        "Direct support for reorders, sizing guidance, and recommendations based on best-selling designs.",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Apply",
      description:
        "Submit your wholesale application with your store details and intended order volume.",
    },
    {
      step: "02",
      title: "Approval",
      description:
        "We review your application and confirm pricing, stock availability, and delivery timelines.",
    },
    {
      step: "03",
      title: "Access",
      description:
        "Receive wholesale pricing, size breakdowns, and available Cape Town, South Africa, and Africa map designs.",
    },
    {
      step: "04",
      title: "Order & Sell",
      description:
        "Place your first order (minimum 50 units) and start selling immediately.",
    },
  ];

  const requirements = [
    "Registered retail business or established online store",
    "Minimum order quantity of 50 T-shirts per order",
    "Ability to retail graphic T-shirts in-store or online",
    "Commitment to representing the TeesnGees brand accurately",
    "Valid business or trading details",
  ];

  return (
    <div className="min-h-screen">
      <DeliveryMarquee />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden transition-all duration-700 ${
            heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src="images/products/double.jfif"
              alt="Wholesale apparel partnership"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-20 text-center md:text-left md:max-w-3xl md:ml-[10%]">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Wholesale Access
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Stock Authentic <span className="text-primary">Cape Town Map Tees</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Partner with TeesnGees and stock premium custom-printed T-shirts
              featuring Cape Town, South Africa, and Africa map designs. Wholesale
              orders start from 50 units.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="xl" variant="nike" asChild>
                <a href="#apply">Apply for Wholesale</a>
              </Button>
              <Button size="xl" variant="nikeOutline" asChild>
                <a href="#benefits">View Wholesale Benefits</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          ref={benefitsRef}
          className={`py-16 md:py-24 bg-muted/30 transition-all duration-700 ${
            benefitsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Why Stock TeesnGees
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Built for Retailers Who Sell Local Culture
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Our wholesale program is designed for retailers who value strong
                  visual identity, consistent demand, and reliable supply of
                  locally inspired apparel.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="border-none shadow-sm bg-background">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/bg-all.jpg"
                  alt="Retail apparel display"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                  <div className="text-4xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Minimum Units</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          ref={howItWorksRef}
          className={`py-16 md:py-24 transition-all duration-700 ${
            howItWorksVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">How Wholesale Works</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-primary/10 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent -translate-x-8" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section
          ref={requirementsRef}
          className={`py-16 md:py-24 bg-muted/30 transition-all duration-700 ${
            requirementsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/images/trending/couple-1.png"
                  alt="T-shirt production"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>

              <div className="order-1 lg:order-2">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Wholesale Criteria
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  Who Can Apply
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We partner with retailers who understand the value of
                  locally inspired fashion and consistent product quality.
                </p>

                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="apply"
          ref={ctaRef}
          className={`py-16 md:py-24 bg-primary text-primary-foreground transition-all duration-700 ${
            ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Apply for TeesnGees Wholesale
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8">
                  Stock best-selling Cape Town, South Africa, and Africa map
                  T-shirts in your store. Our team will respond within 48 hours.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" />
                    <span>info@teesngees.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" />
                    <span>+27 79 079 9974</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>Cape Town, South Africa</span>
                  </div>
                </div>
              </div>

              <Card className="bg-background text-foreground">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">
                    Wholesale Application
                  </h3>
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Business Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your Store / Brand Name"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="you@yourstore.com"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+27 00 000 0000"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Tell us about your business
                      </label>
                      <textarea
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                        placeholder="Describe your store, location, customer base, and the quantities you’re interested in stocking."
                      />
                    </div>

                    <Button type="submit" size="xl" variant="nike" className="w-full">
                      Submit Wholesale Application
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partner;
