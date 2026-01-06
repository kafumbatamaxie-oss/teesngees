import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { homepageData } from "@/data/homepage";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import prem1 from "@/assets/about/prem-1.jpg"
import prem2 from "@/assets/about/prem-2.jpg"

const ProductHighlightsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div 
            className={`space-y-6 order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-20"
            }`}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Premium Quality
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase">
              {homepageData.productHighlights.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {homepageData.productHighlights.shortDescription}
            </p>
            
            {/* Features list */}
            <ul className="space-y-3">
              {homepageData.productHighlights.features.map((feature, index) => (
                <li 
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
                >
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="mt-4">
              <Link to="/collections">Shop Now</Link>
            </Button>
          </div>

          {/* Images */}
          <div 
            className={`relative order-1 lg:order-2 transition-all duration-1000 delay-200 ease-out ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-muted overflow-hidden">
                <img
                  src={`${prem1}`}
                  alt="Premium cotton T-shirt detail"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div 
                className={`aspect-[3/4] bg-muted overflow-hidden mt-8 transition-all duration-1000 delay-400 ${
                  isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={`${prem2}`}
                  alt="T-shirt fit showcase"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            {/* Quality badge */}
            <div 
              className={`absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 transition-all duration-700 delay-500 ${
                isVisible 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-90"
              }`}
            >
              <p className="text-xs uppercase tracking-wider">100% Cotton</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlightsSection;
