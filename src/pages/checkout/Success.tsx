import { useEffect } from "react";
import confetti from "canvas-confetti";
import { useCart } from "@/context/CartContext";
import { useCheckoutFeedback } from "@/context/CheckoutFeedbackContext";

export default function CheckoutSuccess() {
  const { setIsCartOpen } = useCart();
  const { showSuccess } = useCheckoutFeedback();

  useEffect(() => {
    // 🎉 Confetti burst
    confetti({
      particleCount: 160,
      spread: 80,
      origin: { y: 0.6 },
    });

    // Optional second burst for polish
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 120,
        origin: { y: 0.4 },
      });
    }, 400);

    // Show success dialog
    showSuccess("Payment successful! Thank you for your order.");

    // Close cart if open
    setIsCartOpen(false);

    // Redirect back to home after a delay
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex items-center justify-center text-center bg-background">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Payment Successful 🎉</h1>
        <p className="text-muted-foreground">
          Thanks for your order. Redirecting you back to the store…
        </p>
      </div>
    </div>
  );
}
