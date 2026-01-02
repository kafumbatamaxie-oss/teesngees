import { Truck } from "lucide-react";

const DeliveryMarquee = () => {
  const message = "FREE DELIVERY COUNTRYWIDE FROM R500 ORDER AND ABOVE";
  
  return (
    <div className="bg-gold text-background py-2.5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <Truck className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm font-medium tracking-wide">{message}</span>
            <span className="text-primary">•</span>
            <span className="text-sm font-medium tracking-wide">{message}</span>
            <span className="text-primary">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryMarquee;
