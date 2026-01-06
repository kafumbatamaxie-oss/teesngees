import { Button } from "@/components/ui/button";
import heroImage from "@/assets/6-scaled.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden mb-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="TeesNgees Cape Town map and township inspired T-shirt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container h-full flex items-center">
        <div className="max-w-xl animate-slide-up">
          <p className="text-sm font-medium uppercase tracking-widest mb-4 text-muted-foreground">
            Wear Your Roots
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display uppercase leading-none mb-6">
            Cape Town
            <br />
            <span className="text-muted-foreground">In Every Thread</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Positive african inspired T-shirt made in Cape Town.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="xl">
              Shop Collection
            </Button>
            <Button variant="outline" size="xl">
              Explore Designs
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
