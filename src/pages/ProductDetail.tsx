import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Heart, Truck, RotateCcw, Shield, Star } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import CartDrawer from "@/components/CartDrawer";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* <Header /> */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-display mb-4">Product Not Found</h1>
            <Link to="/">
              {/* <Button variant="nike">Continue Shopping</Button> */}
            </Link>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }

  const allImages = product.images.length > 0 ? product.images : [product.image];

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }
    addToCart(product, selectedSize, selectedColor);
    toast.success("Added to bag!");
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* <Header />
      <CartDrawer /> */}

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-foreground transition-colors">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        <div className="container pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-secondary overflow-hidden group">
                <img
                  src={allImages[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Navigation Arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background hover:scale-110"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="bg-nike-orange text-primary-foreground text-xs font-bold px-3 py-1">
                      NEW
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="bg-foreground text-background text-xs font-bold px-3 py-1">
                      BEST SELLER
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-nike-red text-primary-foreground text-xs font-bold px-3 py-1">
                      SALE
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 border-2 transition-all duration-200 ${
                        currentImageIndex === idx
                          ? "border-foreground"
                          : "border-transparent hover:border-muted-foreground"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Title & Price */}
              <div>
                <p className="text-nike-orange font-medium mb-1">{product.category}</p>
                <h1 className="text-3xl md:text-4xl font-display mb-4">{product.name}</h1>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-nike-orange text-nike-orange" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(128 Reviews)</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Select Color</span>
                  {selectedColor && (
                    <span className="text-sm text-muted-foreground">{selectedColor}</span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 text-sm transition-all duration-200 ${
                        selectedColor === color
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Select Size</span>
                  <button className="text-sm text-muted-foreground underline hover:text-foreground transition-colors">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border-2 text-sm font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-3 pt-4">
                {/* <Button
                  variant="nike"
                  size="lg"
                  className="flex-1 h-14 text-base"
                  onClick={handleAddToCart}
                >
                  Add to Bag
                </Button>
                <Button
                  variant="nikeOutline"
                  size="lg"
                  className="h-14 px-4"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                > */}
                  {/* <Heart
                    className={`h-6 w-6 transition-all duration-300 ${
                      isWishlisted ? "fill-nike-red text-nike-red scale-110" : ""
                    }`}
                  />
                </Button> */}
              </div>

              {/* Features */}
              <div className="grid gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary rounded-full">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Free Delivery</p>
                    <p className="text-sm text-muted-foreground">On orders over $50</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary rounded-full">
                    <RotateCcw className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Free Returns</p>
                    <p className="text-sm text-muted-foreground">Within 60 days</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary rounded-full">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Secure Checkout</p>
                    <p className="text-sm text-muted-foreground">100% protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default ProductDetail;
