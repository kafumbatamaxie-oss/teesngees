import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductQuickView from "./ProductQuickView";
import { products, Product } from "@/data/products";
import { useStore } from "@/context/StoreContext";

const TrendingProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const trendingProducts = products.slice(0, 4);
  const { totalItemsInStore } = useStore();

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="">
            
            <h2 className="text-3xl md:text-4xl font-display uppercase">
              Available Stock In Store
            </h2>
            <p className="flex text-sm items-center justify-between mb-2">({totalItemsInStore} Items)</p>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors group"
          >
            Shop All
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trendingProducts.map((product) => (
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

export default TrendingProducts;
