"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

export default function CheckoutSuccess() {
  const [open, setOpen] = useState(true);
  const [verified, setVerified] = useState<"pending" | "success" | "failed">(
    "pending"
  );

  useEffect(() => {
    // 🎊 Confetti burst
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.6 }
    });

    // Verify payment with backend
    fetch("/api/orders/verify")
      .then((res) => res.json())
      .then((data) => {
        setVerified(data.paid ? "success" : "failed");
      })
      .catch(() => setVerified("failed"));
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>

          <DialogTitle className="text-2xl">
            {verified === "pending" && "Processing Payment"}
            {verified === "success" && "Payment Successful 🎉"}
            {verified === "failed" && "Payment Pending"}
          </DialogTitle>

          <DialogDescription className="mt-2">
            {verified === "pending" &&
              "We are confirming your payment. Please wait a moment."}

            {verified === "success" &&
              "Thank you for your order! Your payment was received successfully."}

            {verified === "failed" &&
              "Your payment is being verified. If money was deducted, it will reflect shortly."}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6 space-y-3">
          <Button className="w-full" variant="nike">
            View Order
          </Button>

          <Button className="w-full" variant="nikeOutline">
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
