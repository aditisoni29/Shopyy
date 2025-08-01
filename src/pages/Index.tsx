import Layout from "@/components/layout/Layout";
import HeroBanner from "@/components/home/HeroBanner";
import Categories from "@/components/home/Categories";
import TrendingItems from "@/components/home/TrendingItems";
import PromotionalBanner from "@/components/home/PromotionalBanner";
import CallToAction from "@/components/home/CallToAction";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <Categories />
      <TrendingItems />
      <PromotionalBanner />
      <CallToAction />
      <Testimonials />
    </Layout>
  );
};

export default Index;
