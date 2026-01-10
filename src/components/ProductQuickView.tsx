import { useState, useMemo } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface ProductQuickViewProps {
  product: Product;
  onClose: () => void;
}

const ProductQuickView = ({ product, onClose }: ProductQuickViewProps) => {
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /* -----------------------------------------------
     DERIVED DATA
  ----------------------------------------------- */
  const availableColors = useMemo(
    () => Array.from(new Set(product.variants.map((v) => v.color))),
    [product]
  );

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

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  /* -----------------------------------------------
     HANDLERS
  ----------------------------------------------- */
  const handleAddToCart = () => {
    if (!selectedVariant || selectedVariant.quantity === 0) return;
    addToCart(product, selectedSize, selectedColor);
    onClose();
  };

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-foreground/50 z-50 animate-fade-in" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-4xl md:max-h-[90vh] bg-background z-50 shadow-card overflow-hidden animate-zoom-in">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-secondary rounded-full"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2 h-full overflow-y-auto">
          {/* Images */}
          <div className="relative aspect-square md:aspect-auto bg-secondary">
            <img src={images[currentImageIndex]} alt={product.name} className="w-full h-full object-cover" />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 rounded-full"
                >
                  <ChevronRight />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full ${
                        index === currentImageIndex ? "bg-foreground" : "bg-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Details */}
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex-1">
              {/* Badge */}
              <p className="text-sm text-nike-orange font-medium mb-1">
                {product.isNew ? "Just In" : product.isBestSeller ? "Best Seller" : ""}
              </p>

              <h2 className="text-2xl font-display mb-1">{product.name}</h2>
              <p className="text-muted-foreground mb-4">{product.category}</p>
              <p className="text-xl font-medium mb-4">R{product.price}</p>
              <p className="text-sm text-muted-foreground mb-6">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="text-sm font-medium mb-3">Color {selectedColor && `: ${selectedColor}`}</p>
                <div className="flex gap-2 flex-wrap">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setSelectedColor(color);
                        setSelectedSize(""); // reset size
                      }}
                      className={`px-3 py-2 border text-sm ${
                        selectedColor === color
                          ? "border-foreground"
                          : "border-border hover:border-muted-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm font-medium">Select Size</p>
                  <button className="text-sm text-muted-foreground underline">Size Guide</button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {sizesForSelectedColor.map(({ size, quantity }) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      disabled={quantity === 0}
                      className={`py-3 border text-sm font-medium ${
                        selectedSize === size
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      } ${quantity === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
                    >
                      {size}
                      {quantity > 0 &&  (
                        <span className="block text-xs text-nike-red">{quantity} left</span>
                      )}
                    </button>
                  ))}
                </div>

                {!selectedSize && selectedColor && (
                  <p className="text-sm text-nike-red mt-2">Please select a size</p>
                )}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button
                variant="nike"
                size="xl"
                className="w-full"
                onClick={handleAddToCart}
                disabled={!selectedVariant || selectedVariant.quantity === 0}
              >
                Add to Bag
              </Button>

              <Button variant="nikeOutline" size="xl" className="w-full">
                Favorite
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductQuickView;
