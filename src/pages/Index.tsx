import Header from "@/components/Header";
import TrendingProducts from "@/components/TrendingProducts";
import FeaturedCollections from "@/components/FeaturedCollections";
import BestSellers from "@/components/BestSellers";
import MembershipBanner from "@/components/MembershipBanner";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ShopByCategory from "@/components/ShopByCatogry";
import HeroCarousel from "@/components/HeroCarousel";
import PromoMarquee from "@/components/PromoMarquee";
import DeliveryMarquee from "@/components/DeliveryMarquee";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ProductHighlightsSection from "@/components/home/ProductHighlightsSection";
import WhatsAppButton from "@/components/WhatsaAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <DeliveryMarquee />
      <Header />
      <main>
        <HeroCarousel />
        <PromoMarquee />
        <AboutSection />
        <TrendingProducts />
        <WhyChooseSection />
        <FeaturedCollections />
        <ProductHighlightsSection />
        <BestSellers />
        <ShopByCategory />
        <MembershipBanner />
        <WhatsAppButton />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
