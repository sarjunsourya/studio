import { HeroSection } from '@/components/sections/hero-section';
import { WhyUsSection } from '@/components/sections/why-us-section';
import { FeaturedDishesSection } from '@/components/sections/featured-dishes-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <WhyUsSection />
      <FeaturedDishesSection />
    </div>
  );
}
