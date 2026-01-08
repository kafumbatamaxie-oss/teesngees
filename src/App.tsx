import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { HashRouter } from "react-router-dom";
import Shop from "./pages/Shop";
import Terms from "./pages/Terms";
import About from "./pages/About";
import { CheckoutFeedbackProvider } from "./context/CheckoutFeedbackContext";
import Partner from "./pages/Partner";
import ScrollToTop from "./components/ScrollToTop";
import MenShop from "./pages/MenShop";
import WomenShop from "./pages/WomenShop";
import KidsShop from "./pages/KidsShop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <CheckoutFeedbackProvider>
        <Toaster />
        <Sonner />
        
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            
            <Route path="/terms" element={<Terms />} />
            <Route path="/about" element={<About />} />

            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:category" element={<Shop />} />

            <Route path="/men" element={<MenShop />} />
            <Route path="/men:category" element={<MenShop />} />

            <Route path="/women" element={<WomenShop />} />
            <Route path="/women:category" element={<WomenShop />} />

            <Route path="/kids" element={<KidsShop />} />
            <Route path="/kids:category" element={<KidsShop />} />

            <Route path="/wholesale" element={<Partner />} />

            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </BrowserRouter>
        </CheckoutFeedbackProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
