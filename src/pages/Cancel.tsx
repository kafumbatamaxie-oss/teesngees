import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

const CheckoutCancel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <XCircle className="w-20 h-20 text-destructive mb-6" />
        <h1 className="text-4xl font-bold mb-4">Payment Cancelled</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your payment was not completed. You can review your cart and try again.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={() => navigate("/shop")}
            size="lg"
            variant="nike"
          >
            Back to Shop
          </Button>
          <Button
            onClick={() => navigate("/checkout")}
            size="lg"
            variant="nikeOutline"
          >
            Retry Payment
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutCancel;
