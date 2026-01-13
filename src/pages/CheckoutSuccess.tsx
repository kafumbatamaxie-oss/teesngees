import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  // Clear cart on successful payment
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-display">Payment Successful!</h1>
            <p className="text-muted-foreground">
              Thank you for your order. We've received your payment and your order is being processed.
            </p>
          </div>

          <div className="bg-secondary rounded-lg p-6 text-left space-y-3">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">What's next?</p>
                <p className="text-sm text-muted-foreground">
                  You'll receive an email confirmation with your order details and tracking information once your order ships.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild variant="nike" className="flex-1">
              <Link to="/collections">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Questions? Contact us at{" "}
            <a href="mailto:info@teesngees.com" className="text-primary hover:underline">
              info@teesngees.com
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
