import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  return (
    <div className="group">
      {/* Image Container */}
      <div className="relative aspect-square bg-nike-light-gray overflow-hidden mb-3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-nike-orange text-primary-foreground text-xs font-medium px-2 py-1">
              Best Seller
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-nike-red text-primary-foreground text-xs font-medium px-2 py-1">
              Sale
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-background rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary">
          <Heart className="h-4 w-4" />
        </button>

        {/* Quick View */}
        <button
          onClick={() => onQuickView?.(product)}
          className="absolute bottom-3 left-3 right-3 bg-background/95 backdrop-blur-sm py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background text-center"
        >
          Quick View
        </button>
      </div>

      {/* Product Info */}
      <Link to={`/product/${product.id}`} className="block">
        <div className="flex justify-between items-start mb-1">
          <div>
            <h3 className="font-medium text-sm group-hover:text-muted-foreground transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">${product.price}</span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              R{product.originalPrice}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {product.colors.length} Color{product.colors.length > 1 ? "s" : ""}
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
