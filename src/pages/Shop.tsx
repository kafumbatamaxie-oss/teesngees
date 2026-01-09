import { useState, useMemo } from "react";
import { useSearchParams, Link, useParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, Grid3X3, LayoutList } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import ProductQuickView from "@/components/ProductQuickView";
import { products, Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Shop = () => {
  const { gender, category: categoryParam } = useParams<{
    gender?: "men" | "women" | "kids" ;
    category?: string;}>();
  
  const initialCategory = categoryParam || "all";
  const initialGender = gender || "all";


  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  

  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const categories = [
  { value: "all", label: "All Products" },
  { value: "round-neck-tee", label: "Round Neck Tee" },
  { value: "v-tee", label: "V-Tee" },
  { value: "sweater", label: "Sweater" },
  { value: "accessories", label: "Accessories" },
];  


  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (initialGender !== "all") {
    result = result.filter(product =>
      product.genders.includes(initialGender)
    );
  }


    if (category !== "all") {
      result = result.filter(p => p.categorySlug === category);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case "bestseller":
        result.sort((a, b) => Number(b.isBestSeller) - Number(a.isBestSeller));
        break;
    }

    return result;
  }, [products, initialGender, category, searchQuery, sortBy]);


  const handleSearch = (value: string) => {
    setSearchQuery(value);
    if (value) {
      setSearchParams({ search: value, category });
    } else {
      setSearchParams({ category });
    }
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setSearchParams(searchQuery ? { search: searchQuery, category: value } : { category: value });
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchParams(category !== "all" ? { category } : {});
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <CartDrawer />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Shop</span>
          </nav>
        </div>

        {/* Hero Banner */}
        <div className="relative py-12 md:py-16">
            <div
                className="absolute inset-0 z-0 opacity-10  pointer-events-none bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage:
                    "url('/images/bg-all.jpg')",
                }}
            />
          <div className="container text-center">
            <h1 className="text-4xl font-bold uppercase">
              {gender ? `${gender} ${category}` : "Shop All"}
            </h1>

            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our complete collection of sneakers, running shoes, and lifestyle footwear.
            </p>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="container py-6 border-b border-border">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-secondary rounded-full text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Select value={category} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="bestseller">Best Sellers</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <div className="hidden md:flex items-center gap-1 border border-border rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid"
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <LayoutList className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-muted-foreground">
            {searchQuery && (
              <span>
                Showing {filteredProducts.length} results for "{searchQuery}"
              </span>
            )}
            {!searchQuery && (
              <span>Showing {filteredProducts.length} products</span>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="container py-8">
          {filteredProducts.length > 0 ? (
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={() => setQuickViewProduct(product)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl font-medium mb-2">No products found</p>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters
              </p>
              <Button onClick={clearSearch}>Clear Search</Button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Quick View Modal */}
      {quickViewProduct && (
        <ProductQuickView
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
};

export default Shop;
