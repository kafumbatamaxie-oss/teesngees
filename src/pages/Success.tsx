import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Success = () => {
    const { clearCart } = useCart(); // get clearCart from context
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

   useEffect(() => {
    // Clear cart on mount
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Confetti */}
      <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={250} />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center flex flex-col items-center gap-6"
        >
          <CheckCircle className="w-20 h-20 text-green-500" />
          <h1 className="text-3xl font-bold text-foreground">Payment Successful!</h1>
          <p className="text-muted-foreground text-lg">
            Thank you for your order. A confirmation email has been sent to you.
          </p>
          <Button size="lg" variant="nike" onClick={() => navigate("/shop")}>
            Back to Shopping
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Success;
