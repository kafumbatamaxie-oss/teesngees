import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { XCircle } from "lucide-react";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center flex flex-col items-center gap-6"
        >
          <XCircle className="w-20 h-20 text-red-500" />
          <h1 className="text-3xl font-bold text-foreground">Payment Failed</h1>
          <p className="text-muted-foreground text-lg">
            Something went wrong during the payment process. Please try again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
            <Button size="lg" variant="nike" className="flex-1" onClick={() => navigate("/checkout")}>
              Try Again
            </Button>
            <Button size="lg" variant="nikeOutline" className="flex-1" onClick={() => navigate("/shop")}>
              Back to Shop
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Error;
