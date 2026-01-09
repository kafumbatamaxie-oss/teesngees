import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { Product, products } from "@/data/products";

export interface CartItem {
  productId: string;
  size: string;
  color: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  totalPrice: number;
  totalItems: number; // ✅ added totalItems
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, size: string, color: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    color: string,
    quantity: number
  ) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // ✅ Total price calculation
  const totalPrice = useMemo(() => {
    return items.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);
  }, [items]);

  // ✅ Total items in cart
  const totalItems = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  const addToCart = (product: Product, size: string, color: string) => {
    const variant = product.variants.find(
      (v) => v.size === size && v.color === color
    );
    if (!variant || variant.quantity === 0) return;

    setItems((prev) => {
      const existing = prev.find(
        (i) =>
          i.productId === product.id && i.size === size && i.color === color
      );
      if (existing) {
        const newQuantity = Math.min(existing.quantity + 1, variant.quantity);
        return prev.map((i) =>
          i === existing ? { ...i, quantity: newQuantity } : i
        );
      }
      return [...prev, { productId: product.id, size, color, quantity: 1 }];
    });
  };

  const updateQuantity = (
    productId: string,
    size: string,
    color: string,
    quantity: number
  ) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const variant = product.variants.find(
      (v) => v.size === size && v.color === color
    );
    if (!variant) return;

    // Clamp quantity between 1 and available variant quantity
    const safeQuantity = Math.max(1, Math.min(quantity, variant.quantity));

    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId &&
        item.size === size &&
        item.color === color
          ? { ...item, quantity: safeQuantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string, size: string, color: string) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.size === size &&
            item.color === color
          )
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalPrice,
        totalItems, // ✅ provide totalItems
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
