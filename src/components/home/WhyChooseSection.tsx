import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { homepageData } from "@/data/homepage";
import { Scissors, Heart, Shield, Palette, Clock } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  local: <Scissors className="h-6 w-6" />,
  comfort: <Heart className="h-6 w-6" />,
  collar: <Shield className="h-6 w-6" />,
  prints: <Palette className="h-6 w-6" />,
  longevity: <Clock className="h-6 w-6" />,
};

const WhyChooseSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 transition-all duration-700 ${
            headerVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase mb-4">
            {homepageData.whyChoose.title}
          </h2>
          <p className="text-muted-foreground">
            Discover what sets our African-crafted T-shirts apart from the rest.
          </p>
        </div>

        {/* Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {homepageData.whyChoose.items.map((item, index) => (
            <div
              key={item.id}
              className={`bg-background p-6 md:p-8 transition-all duration-700 hover:shadow-card group ${
                gridVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: gridVisible ? `${index * 100}ms` : "0ms" }}
            >
              <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                {iconMap[item.id]}
              </div>
              <h3 className="text-lg font-display uppercase mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
