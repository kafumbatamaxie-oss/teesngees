import { useEffect } from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckoutFeedback } from "@/components/checkout/CheckoutFeedback";
import { useCart } from "@/context/CartContext";
import { useCheckoutFeedback } from "@/context/CheckoutFeedbackContext";


const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, totalPrice, updateQuantity, removeFromCart } = useCart();
  const { showError, open, status, message, close } = useCheckoutFeedback(); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/payfast/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalPrice,
          item_name: `Cart Checkout (${items.length} items)`,
          email: "customer@email.com",
        }),
      });

      const data = await res.json();
      if (!data?.payfastUrl) {
        throw new Error("Invalid PayFast response");
      }

      setLoading(true);
      window.location.href = data.payfastUrl;

    } catch {
      showError("Unable to start payment. Please try again.");
    }
  };


 

   
 
  

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer - Slides from Right */}
      <div
        className={`fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl transition-transform duration-500 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-display">Bag ({items.length})</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                <div className="p-6 bg-secondary rounded-full animate-pulse">
                  <ShoppingBag className="h-12 w-12 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">Your bag is empty</p>
                <Button variant="nike" onClick={() => setIsCartOpen(false)}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item, idx) => (
                  <div
                    key={`${item.product.id}-${item.size}-${item.color}`}
                    className="flex gap-4"
                    style={{
                      animationDelay: `${idx * 50}ms`,
                      animation: "fade-in 0.3s ease-out forwards",
                      opacity: 0
                    }}
                  >
                    <div className="w-24 h-24 bg-secondary flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-sm">{item.product.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.product.category}</p>
                          <p className="text-sm text-muted-foreground">
                            Size: {item.size} | Color: {item.color}
                          </p>
                        </div>
                        <p className="font-medium">R{item.product.price}</p>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 bg-secondary rounded-full px-2">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            className="p-2 hover:bg-muted rounded-full transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color,
                                item.quantity + 1
                              )
                            }
                            className="p-2 hover:bg-muted rounded-full transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            removeFromCart(item.product.id, item.size, item.color)
                          }
                          className="text-sm text-muted-foreground hover:text-nike-red transition-colors underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4 bg-background">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold text-lg">R{totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
              <Button 
                variant="nike" 
                size="lg" 
                className="w-full h-14"
                onClick={handleCheckout}
                disabled={loading}  
              >
                {loading ? "Redirecting…" : "Checkout"}
              </Button>
              {/* <Button variant="nikeOutline" size="lg" className="w-full">
                View Bag
              </Button> */}
            </div>
          )}
        </div>
      </div>

      <CheckoutFeedback 
        open={open}
        status={status}
        message={message}
        onClose={close}
      />

    </>
  );
};



export default CartDrawer;
