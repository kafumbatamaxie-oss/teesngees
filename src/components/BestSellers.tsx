import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductQuickView from "./ProductQuickView";
import { products, Product } from "@/data/products";

const BestSellers = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <section className="py-16 bg-nike-light-gray">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-display uppercase">
            Best Sellers
          </h2>
          <Link
            to="/best-sellers"
            className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group"
          >
            Shop All
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default BestSellers;
