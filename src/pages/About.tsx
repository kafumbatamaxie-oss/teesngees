import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import DeliveryMarquee from "@/components/DeliveryMarquee";
import { useAboutData } from "@/hooks/useDataFetching";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, MapPin, Globe, Scissors, Check } from "lucide-react";

const AboutSkeleton = () => (
  <div className="space-y-12">
    {/* Hero Skeleton */}
    <div className="relative h-[400px] bg-muted">
      <Skeleton className="absolute inset-0" />
    </div>

    {/* Intro Skeleton */}
    <div className="container py-16">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <Skeleton className="h-10 w-64 mx-auto" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6 mx-auto" />
      </div>
    </div>

    {/* Stats Skeleton */}
    <div className="bg-muted py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="h-12 w-12 rounded-full mx-auto" />
              <Skeleton className="h-8 w-20 mx-auto" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Sections Skeleton */}
    {[...Array(4)].map((_, i) => (
      <div key={i} className="container py-12">
        <div className="max-w-4xl mx-auto space-y-4">
          <Skeleton className="h-8 w-72" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    ))}
  </div>
);

const About = () => {
  const { data, isLoading } = useAboutData();

  const statIcons = [Calendar, MapPin, Globe, Scissors];

  return (
    <div className="min-h-screen">
      <DeliveryMarquee />
      <Header />
      <main>
        {isLoading ? (
          <AboutSkeleton />
        ) : (
          <>
            {/* Hero Section */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img
                src={data?.hero.image}
                alt="About TEES & GEES"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative container h-full flex items-center justify-center text-center">
                <div className="text-white max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-display uppercase mb-4">
                    {data?.hero.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90">
                    {data?.hero.subtitle}
                  </p>
                </div>
              </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 md:py-24">
              <div className="container">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl md:text-4xl font-display uppercase mb-8">
                    {data?.intro.title}
                  </h2>
                  {data?.intro.content.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-muted-foreground text-lg leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-muted">
              <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {data?.stats.map((stat, index) => {
                    const Icon = statIcons[index % statIcons.length];
                    return (
                      <div key={stat.label} className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="text-3xl md:text-4xl font-bold mb-2">
                          {stat.value}
                        </div>
                        <div className="text-muted-foreground">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Content Sections */}
            {data?.sections.map((section, index) => (
              <section
                key={section.title}
                className={`py-16 md:py-20 ${index % 2 === 1 ? "bg-muted/50" : ""}`}
              >
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-display uppercase mb-8 text-center md:text-left">
                      {section.title}
                    </h2>
                    <div className="space-y-4">
                      {section.content.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-muted-foreground leading-relaxed text-base md:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* Highlights Section */}
            {data?.highlights && (
              <section className="py-16 md:py-24 bg-primary text-primary-foreground">
                <div className="container">
                  <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-display uppercase mb-10 text-center">
                      {data.highlights.title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      {data.highlights.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg px-4 py-3"
                        >
                          <Check className="h-5 w-5 flex-shrink-0" />
                          <span className="text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default About;
