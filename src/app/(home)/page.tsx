import BackgroundSection from "./_components/background-section";
import GoalSection from "./_components/goal-section";
import HeroSection from "./_components/hero-section";
import QuoteSection from "./_components/quote-section";
export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSection />
      <QuoteSection />
      <BackgroundSection />
      <GoalSection />
    </div>
  );
}
