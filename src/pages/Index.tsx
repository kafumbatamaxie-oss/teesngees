import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrendingProducts from "@/components/TrendingProducts";
import FeaturedCollections from "@/components/FeaturedCollections";
import BestSellers from "@/components/BestSellers";
import MembershipBanner from "@/components/MembershipBanner";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ShopByCategory from "@/components/ShopByCaetogry";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrendingProducts />
        <FeaturedCollections />
        <BestSellers />
        <ShopByCategory />
        <MembershipBanner />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;
