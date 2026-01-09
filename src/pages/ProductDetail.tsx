import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Truck,
  RotateCcw,
  Shield,
  Star,
} from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">Product Not Found</h1>
          <Link to="/" className="underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  /* --------------------------------------------------
     STEP 3 — DERIVED DATA (NO ASSUMPTIONS)
  -------------------------------------------------- */

  const availableColors = useMemo(() => {
    return Array.from(new Set(product.variants.map((v) => v.color)));
  }, [product]);

  const sizesForSelectedColor = useMemo(() => {
    if (!selectedColor) return [];
    return product.variants.filter((v) => v.color === selectedColor);
  }, [product, selectedColor]);

  const selectedVariant = useMemo(() => {
    if (!selectedColor || !selectedSize) return null;
    return product.variants.find(
      (v) => v.color === selectedColor && v.size === selectedSize
    );
  }, [product, selectedColor, selectedSize]);

  const allImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  /* --------------------------------------------------
     HANDLERS
  -------------------------------------------------- */

  const handleAddToCart = () => {
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }

    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    if (!selectedVariant || selectedVariant.quantity === 0) {
      toast.error("Selected size is out of stock");
      return;
    }

    addToCart(product, selectedSize, selectedColor);
    toast.success("Added to bag!");
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + allImages.length) % allImages.length
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container pb-16">
        {/* Breadcrumb */}
        <nav className="py-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>{" "}
          / <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square bg-secondary overflow-hidden">
              <img
                src={allImages[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>

            {allImages.length > 1 && (
              <div className="flex gap-2 mt-3">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-20 h-20 border ${
                      currentImageIndex === i
                        ? "border-foreground"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-nike-orange">{product.category}</p>
              <h1 className="text-3xl font-display">{product.name}</h1>
              <p className="text-2xl font-bold mt-2">R{product.price}</p>

              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-nike-orange text-nike-orange"
                  />
                ))}
              </div>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Color Selection */}
            <div>
              <p className="font-medium mb-2">
                Select Color{" "}
                {selectedColor && (
                  <span className="text-muted-foreground">
                    — {selectedColor}
                  </span>
                )}
              </p>
              <div className="flex gap-2 flex-wrap">
                {availableColors.map((color) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedColor(color);
                      setSelectedSize("");
                    }}
                    className={`px-4 py-2 border ${
                      selectedColor === color
                        ? "bg-foreground text-background"
                        : "border-border"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <p className="font-medium mb-2">Select Size</p>
              <div className="grid grid-cols-4 gap-2">
                {sizesForSelectedColor.map(({ size, quantity }) => (
                  <button
                    key={size}
                    disabled={quantity === 0}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 border text-sm ${
                      selectedSize === size
                        ? "bg-foreground text-background"
                        : "border-border"
                    } ${
                      quantity === 0
                        ? "opacity-40 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {size}
                    {quantity > 0 && quantity <= 3 && (
                      <span className="block text-xs text-nike-red">
                        {quantity} left
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {selectedVariant && (
              <p className="text-sm text-muted-foreground">
                {selectedVariant.quantity} item(s) available
              </p>
            )}

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full h-14 bg-foreground text-background font-medium"
            >
              Add to Bag
            </button>

            {/* Features */}
            <div className="grid gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Truck />
                <span>Free Delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw />
                <span>Free Returns</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
