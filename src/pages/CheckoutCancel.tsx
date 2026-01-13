import { Link } from "react-router-dom";
import { XCircle, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CheckoutCancel = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
            <XCircle className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-display">Payment Cancelled</h1>
            <p className="text-muted-foreground">
              Your payment was cancelled. Don't worry, your cart items are still saved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button asChild variant="nikeOutline" className="flex-1">
              <Link to="/collections">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
            <Button asChild variant="nike" className="flex-1">
              <Link to="/checkout">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Try Again
              </Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Need help? Contact us at{" "}
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

export default CheckoutCancel;
