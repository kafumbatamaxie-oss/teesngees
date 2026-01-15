import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [payfastData, setPayfastData] = useState<Record<string, string> | null>(null);
  const [payfastUrl, setPayfastUrl] = useState<string>("");

  // Redirect if cart is empty
  useEffect(() => {
    if (items.length === 0 && !payfastData) {
      navigate("/shop");
    }
  }, [items, navigate, payfastData]);

  // Auto-submit PayFast form when data is ready
  useEffect(() => {
    if (payfastData && formRef.current) {
      formRef.current.submit();
    }
  }, [payfastData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerInfo.firstName || !customerInfo.lastName || !customerInfo.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // const baseUrl = window.location.origin;
      const baseUrl="http://localhost:5173"
      console.log(baseUrl)
      
      // Replace this part https://teengees-backend.vercel.app/api/payfast : http://localhost:3000/api/payfast
      const response = await fetch("https://teengees-backend.vercel.app/api/payfast", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: customerInfo.firstName,
            lastName: customerInfo.lastName,
            email: customerInfo.email,
            totalAmount: totalPrice,
            orderId: `ORDER-${Date.now()}`,
            itemName: items.map((i) => i.product.name).join(", "),
            itemDescription: "Purchase from MyShop",
          }),
      });

      const data = await response.json();

if (!data.success) throw new Error(data.error || "PayFast request failed");

setPayfastUrl(data.payfastUrl);
setPayfastData(data.payfastData);

    } catch (error: any) {
      console.error("Checkout error:", error);
      toast({
        title: "Checkout failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  // Format price in ZAR
  const formatZAR = (amount: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
    }).format(amount);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Customer Information */}
          <div>
            <h1 className="text-3xl font-display mb-8">Checkout</h1>
            
            <form onSubmit={handleCheckout} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-medium">Contact Information</h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={customerInfo.firstName}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={customerInfo.lastName}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  variant="nike"
                  size="lg"
                  className="w-full h-14"
                  disabled={isLoading || items.length === 0}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>Pay with PayFast - {formatZAR(totalPrice)}</>
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4" />
                <span>Secure payment powered by PayFast</span>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:pl-8 lg:border-l border-border">
            <h2 className="text-xl font-medium mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="flex gap-4"
                >
                  <div className="w-20 h-20 bg-secondary rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Size: {item.size} | Color: {item.color}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium">{formatZAR(item.product.price * item.quantity)}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatZAR(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-muted-foreground">Calculated at PayFast</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-border">
                <span>Total</span>
                <span>{formatZAR(totalPrice)}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary rounded-lg">
              <h3 className="font-medium text-sm mb-2">Accepted Payment Methods</h3>
              <p className="text-sm text-muted-foreground">
                Credit/Debit Cards (Visa, MasterCard), EFT, Mobicred, SnapScan, Zapper, and more
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Hidden PayFast form for redirect */}
      {payfastData && (
        <form
          ref={formRef}
          action={payfastUrl}
          method="post"
          style={{ display: "none" }}
        >
          {Object.entries(payfastData).map(([name, value]) => (
            <input key={name} type="hidden" name={name} value={value} />
          ))}
        </form>
      )}

      <Footer />
    </div>
  );
};

export default Checkout;
