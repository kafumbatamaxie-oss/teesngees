import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { homepageData } from "@/data/homepage";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutsection from "@/assets/about/about-section.jpg"

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div 
            className={`relative transition-all duration-1000 ease-out ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="aspect-[4/5] rounded bg-muted overflow-hidden">
              <img
                src={`${aboutsection}`}
                alt="TEES & GEES craftsmanship"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Floating accent */}
            <div 
              className={`absolute -bottom-6 -right-6 bg-gold rounded text-primary-foreground p-6 md:p-8 transition-all duration-1000 delay-300 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className=" font-display text-2xl md:text-3xl">Since 2009</p>
            </div>
          </div>

          {/* Content */}
          <div 
            className={`space-y-6 transition-all duration-1000 delay-200 ease-out ${
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-20"
            }`}
          >
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              {homepageData.aboutSection.tagline}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display uppercase">
              {homepageData.aboutSection.title}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {homepageData.aboutSection.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide group"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
