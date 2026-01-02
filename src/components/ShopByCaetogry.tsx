import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Men's",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80",
    link: "/men",
  },
  {
    name: "Women's",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    link: "/women",
  },
  {
    name: "Kids'",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80",
    link: "/kids",
  },
];

const ShopByCategory = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-display uppercase mb-8 text-center">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.link}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <h3 className="text-2xl font-display text-primary-foreground uppercase">
                  {category.name}
                </h3>
                <Button
                  variant="nikeWhite"
                  size="sm"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Shop
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
