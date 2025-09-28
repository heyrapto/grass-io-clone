import HeroSection from "@/components/sections/hero";
import OverviewSection from "@/components/sections/overview";
import Navbar from "@/layout/navbar";

const LandingPage = () => {
  return (
    <main className="">
      <Navbar />
      <HeroSection />
      <OverviewSection />
    </main>
  )
}

export default LandingPage;