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

const Index = () => {
  return (
    <div className="min-h-screen">
      <DeliveryMarquee />
      <Header />
      <main>
        <HeroCarousel />
        <TrendingProducts />
        <PromoMarquee />
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
