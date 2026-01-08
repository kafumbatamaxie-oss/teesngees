import { createContext, useContext, useState } from "react";

type Status = "success" | "error" | null;

type ContextType = {
  open: boolean;
  status: Status;
  message?: string;
  showError: (msg: string) => void;
  showSuccess: (msg: string) => void;
  close: () => void;
};

const CheckoutFeedbackContext = createContext<ContextType | null>(null);

export function CheckoutFeedbackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [message, setMessage] = useState<string>();

  const showError = (msg: string) => {
    setStatus("error");
    setMessage(msg);
    setOpen(true);
  };

  const showSuccess = (msg: string) => {
    setStatus("success");
    setMessage(msg);
    setOpen(true);
  };

  const close = () => setOpen(false);

  return (
    <CheckoutFeedbackContext.Provider
      value={{ open, status, message, showError, showSuccess, close }}
    >
      {children}
    </CheckoutFeedbackContext.Provider>
  );
}

export function useCheckoutFeedback() {
  const ctx = useContext(CheckoutFeedbackContext);
  if (!ctx) {
    throw new Error(
      "useCheckoutFeedback must be used inside CheckoutFeedbackProvider"
    );
  }
  return ctx;
}
