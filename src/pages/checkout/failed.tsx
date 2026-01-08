import { useEffect } from "react";
import { useCheckoutFeedback } from "@/context/CheckoutFeedbackContext";
import { useCart } from "@/context/CartContext";

export default function CheckoutFailed() {
  const { showError } = useCheckoutFeedback();
  const { setIsCartOpen } = useCart();

  useEffect(() => {
    showError("Payment was cancelled or failed.");
    setIsCartOpen(true);
  }, []);

  return null;
}



// "use client";

// import { XCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription
// } from "@/components/ui/dialog";

// export default function CheckoutCancel() {
//   return (
//     <Dialog open>
//       <DialogContent className="max-w-md text-center">
//         <DialogHeader>
//           <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
//             <XCircle className="h-8 w-8 text-red-600" />
//           </div>

//           <DialogTitle className="text-2xl">
//             Payment Cancelled
//           </DialogTitle>

//           <DialogDescription className="mt-2">
//             Your payment was cancelled. No money was deducted.
//           </DialogDescription>
//         </DialogHeader>

//         <div className="mt-6 space-y-3">
//           <Button className="w-full" variant="nike">
//             Try Again
//           </Button>

//           <Button className="w-full" variant="nikeOutline">
//             Back to Shop
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
