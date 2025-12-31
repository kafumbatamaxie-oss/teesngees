import { useState, useEffect, useRef } from "react";
import { X, Search, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

interface MobileSearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSearchDrawer = ({ isOpen, onClose }: MobileSearchDrawerProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredProducts = searchQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const popularSearches = [
  "Cape Town T-Shirts",
  "Township T-Shirts",
  "African Map T-Shirts",
  "South Africa Map Tees",
  "Mother City Apparel",
];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-border">
            <div className="flex-1 flex items-center bg-secondary rounded-full px-4 py-3 gap-3">
              <Search className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-base outline-none w-full"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {searchQuery ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {filteredProducts.length} results for "{searchQuery}"
                </p>
                {filteredProducts.length > 0 ? (
                  <div className="space-y-3">
                    {filteredProducts.map((product, idx) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={onClose}
                        className="flex items-center gap-4 p-3 hover:bg-secondary rounded-lg transition-all duration-200"
                        style={{ 
                          animationDelay: `${idx * 50}ms`,
                          animation: "fade-in 0.3s ease-out forwards",
                          opacity: 0
                        }}
                      >
                        <div className="w-16 h-16 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.category}</p>
                          <p className="text-sm font-bold mt-1">R{product.price}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No products found</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {/* Popular Searches */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-4 w-4 text-nike-orange" />
                    <h3 className="font-medium">Popular Searches</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="px-4 py-2 bg-secondary hover:bg-muted rounded-full text-sm transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trending Products */}
                <div>
                  <h3 className="font-medium mb-4">Trending Now</h3>
                  <div className="space-y-3">
                    {products.slice(0, 4).map((product, idx) => (
                      <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        onClick={onClose}
                        className="flex items-center gap-4 p-3 hover:bg-secondary rounded-lg transition-all duration-200"
                        style={{ 
                          animationDelay: `${idx * 100}ms`,
                          animation: "fade-in 0.4s ease-out forwards",
                          opacity: 0
                        }}
                      >
                        <div className="w-14 h-14 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-sm">{product.name}</h3>
                          <p className="text-xs text-muted-foreground">{product.category}</p>
                        </div>
                        <span className="font-bold text-sm">R{product.price}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSearchDrawer;
