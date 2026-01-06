"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

interface CarouselSlide {
  id: number
  title: string
  subtitle: string
  tagline: string
  description?: string
  image: string
  mobileImage?: string
  cta: string
  ctaSecondary?: string
  ctaLink?: string
  ctaSecondaryLink?: string
}


   

export function Carousel({ slides }: { slides: CarouselSlide[] }) {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const startX = useRef<number | null>(null)

  /* ================= AUTOPLAY ================= */
  useEffect(() => {
    if (!autoPlay) return
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [autoPlay, slides.length])

  const next = () => {
    setCurrent((p) => (p + 1) % slides.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((p) => (p - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  /* ================= TOUCH ================= */
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 50) next()
    if (diff < -50) prev()
    startX.current = null
  }

  return (
    <section
      className="relative w-full h-[75vh] sm:h-screen overflow-hidden"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src={slide.mobileImage || slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover block sm:hidden transition-transform duration-[1200ms] ease-out ${
                    current === idx ? "scale-100" : "scale-105"
            }`}
            />
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover hidden sm:block transition-transform duration-[1200ms] ease-out ${
                current === idx ? "scale-100" : "scale-105"
            }`}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

          {/* Content */}
           <div className="relative container h-full flex items-center">
                <div
                  className={`max-w-xl transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      current === idx
                        ? "opacity-100 translate-x-0 translate-y-0"
                        : "opacity-0 translate-x-10 translate-y-6"
                    }
                  `}
                >
                  <p className="text-sm font-medium uppercase tracking-[0.2em] mb-4 text-gray-400">
                    {slide.tagline}
                  </p>

                  <h1
                    className={`text-5xl sm:text-6xl  text-[#B7975A] md:text-7xl lg:text-8xl font-display uppercase leading-[0.9] mb-6 transition-all duration-700 delay-100 ${
                      current === idx
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {slide.title}
                    <br />
                    <span className="text-white">
                      {slide.subtitle}
                    </span>
                  </h1>

                  <p
                    className={`text-base md:text-lg text-gray-400 mb-8 max-w-md leading-relaxed transition-all duration-700 delay-200 ${
                      current === idx
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                  >
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button variant="nike" size="xl" asChild>
                      <Link to={"/shop"}>{slide.cta}</Link>
                    </Button>
                    <Button variant="nikeOutline" size="xl" asChild>
                      <Link to="/shop">{slide.ctaSecondary}</Link>
                    </Button>
                  </div>
                </div>
                </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={next}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i)
              setAutoPlay(false)
            }}
            className={`rounded-full transition-all ${
              i === current
                ? "bg-secondary w-8 h-2"
                : "bg-white/40 w-2 h-2 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}