import { CTASection1, CTASection2 } from "@/components/sections/cta";
import FAQSection from "@/components/sections/faq";
import HeroSection from "@/components/sections/hero";
import HowItWorksSection from "@/components/sections/how-it-works";
import NewsSection from "@/components/sections/news";
import OverviewSection from "@/components/sections/overview";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";

const LandingPage = () => {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <HowItWorksSection />
      <CTASection1 />
      <FAQSection />
      <NewsSection />
      <CTASection2 />
      <Footer />
    </main>
  )
}

export default LandingPage;