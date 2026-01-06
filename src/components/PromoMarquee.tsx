import { Truck, Headphones, ShieldCheck } from "lucide-react";

const promoItems = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "We offer Free delivery to Cape Town CBD and other areas are charged a shipping fee.",
  },
  {
    icon: Headphones,
    title: "24 / 7 Support",
    description: "Contact us any time for your queries about delivery, refunds, returns, and more.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "We Partner with Payfast to provide a secure online payment system to all our customers.",
  },
];

const PromoMarquee = () => {
  return (
    <div className="bg-[#fefefe] border-y border-border py-8 mb-2 mt-0 overflow-hidden">
      <div className="animate-marquee-slow whitespace-nowrap flex">
        {[...Array(6)].map((_, repeatIndex) => (
          <div key={repeatIndex} className="flex items-center">
            {promoItems.map((item, index) => (
              <div
                key={`${repeatIndex}-${index}`}
                className="flex items-center gap-3 mx-12 min-w-max"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/80 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gold">
                    {item.title}
                  </span>
                  <span className="text-xs text-black max-w-[280px] whitespace-normal leading-tight">
                    {item.description}
                  </span>
                </div>
                <span className="text-muted-foreground/30 mx-8">|</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoMarquee;
