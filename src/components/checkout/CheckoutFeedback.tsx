import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

type CheckoutFeedbackProps = {
  open: boolean;
  status: "success" | "error" | null;
  message?: string;
  onClose: () => void;
};

export const CheckoutFeedback = ({
  open,
  status,
  message,
  onClose
}: CheckoutFeedbackProps) => {

  useEffect(() => {
    if (open && status === "success") {
      confetti({
        particleCount: 160,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [open, status]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="text-center">
        <DialogHeader>
          {status === "success" ? (
            <>
              <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
              <DialogTitle className="text-2xl">
                Payment Successful 🎉
              </DialogTitle>
              <DialogDescription>
                Thank you for shopping with TEES & GEES.
                <br />
                {message ?? "Your order has been confirmed."}
              </DialogDescription>
            </>
          ) : (
            <>
              <XCircle className="mx-auto h-16 w-16 text-nike-red" />
              <DialogTitle className="text-2xl">
                Payment Failed
              </DialogTitle>
              <DialogDescription>
                {message ?? "Something went wrong. Please try again."}
              </DialogDescription>
            </>
          )}
        </DialogHeader>

        <div className="mt-6 flex justify-center gap-4">
          <Button onClick={onClose} variant="nike">
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
