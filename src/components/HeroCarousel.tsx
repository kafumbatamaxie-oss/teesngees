import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import heroImage3 from "@/assets/3-scaled.jpg";
import heroImage6 from "@/assets/6-scaled.jpg";
import heroImage7 from "@/assets/7-scaled.jpg";
import { Carousel } from "./Carousel";

const slides = [
  {
    id: 1,
    tagline: "Wear Your Roots",
    title: "Cape Town",
    subtitle: "In Every Thread",
    description:
      "Positive african inspired T-shirt made in Cape Town",
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
      "inspire love and unity in Africa through T-shirts from the streets of Cape Town.",
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

  return (
    <section className="relative h-[75vh] flex flex-col items-center justify-center">
        <Carousel slides={slides} />
    </section>
  );
};

export default HeroCarousel;
