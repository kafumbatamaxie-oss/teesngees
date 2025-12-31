import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { featuredCollections } from "@/data/products";

const FeaturedCollections = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-display uppercase">
            Featured
          </h2>
          <Link
            to="/collections"
            className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group"
          >
            View All
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredCollections.map((collection, index) => (
            <Link
              key={collection.id}
              to={collection.link}
              className={`group relative overflow-hidden ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-[4/5] bg-nike-light-gray">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-display text-primary-foreground uppercase mb-1">
                  {collection.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  {collection.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary-foreground text-sm font-medium group-hover:gap-3 transition-all">
                  Shop Now
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
