import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import heroImage3 from "@/assets/3-scaled.jpg";
import heroImage6 from "@/assets/6-scaled.jpg";
import heroImage7 from "@/assets/7-scaled.jpg";


const slides = [
  {
    id: 1,
    tagline: "Wear Your Roots",
    title: "Cape Town",
    subtitle: "In Every Thread",
    description:
      "Custom printed T-shirts inspired by Cape Town maps, township culture, and African pride. Designed to represent where you come from.",
    image: heroImage3,
    cta: "Shop Collection",
    ctaSecondary: "Explore Designs",
  },
  {
    id: 2,
    tagline: "Township Culture",
    title: "Street",
    subtitle: "Identity",
    description:
      "Bold township-inspired designs that celebrate local stories, heritage, and everyday culture from the streets of Cape Town.",
    image: heroImage6,
    cta: "View Township Collection",
    ctaSecondary: "Learn More",
  },
  {
    id: 3,
    tagline: "African Heritage",
    title: "Proudly",
    subtitle: "African",
    description:
      "African map and South Africa–inspired T-shirts made to express identity, unity, and pride across generations.",
    image: heroImage7,
    cta: "Shop African Collection",
    ctaSecondary: "View All Designs",
  },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [current, setCurrent] = useState(0);
  const [animateContent, setAnimateContent] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
      setAnimateContent(false);
      setTimeout(() => setAnimateContent(true), 50);
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative h-[85vh] min-h-[550px] overflow-hidden bg-background">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={`${slide.title} ${slide.subtitle}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative container h-full flex items-center">
                <div
                  className={`max-w-xl transition-all duration-700 ease-out ${
                    current === index && animateContent
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <p className="text-sm font-medium uppercase tracking-[0.2em] mb-4 text-primary">
                    {slide.tagline}
                  </p>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.9] mb-6">
                    {slide.title}
                    <br />
                    <span className="text-muted-foreground">{slide.subtitle}</span>
                  </h1>
                  <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="nike" size="xl">
                      {slide.cta}
                    </Button>
                    <Button variant="nikeOutline" size="xl">
                      {slide.ctaSecondary}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 hover:scale-105 group shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-14 md:h-14 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center text-foreground hover:bg-background transition-all duration-300 hover:scale-105 group shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              current === index
                ? "w-10 bg-primary"
                : "w-2.5 bg-foreground/20 hover:bg-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
