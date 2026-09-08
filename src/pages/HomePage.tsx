import React from 'react';
import { Hero } from '../components/sections/Hero';
import { SignatureDish } from '../components/sections/SignatureDish';
import { MisalExplosion } from '../components/sections/MisalExplosion';
import { SpiceMeter } from '../components/sections/SpiceMeter';
import { MenuExperience } from '../components/sections/MenuExperience';
import { ParcelFeature } from '../components/sections/ParcelFeature';
import { FoodGallery } from '../components/sections/FoodGallery';
import { CustomerReviews } from '../components/sections/CustomerReviews';
import { LocationSection } from '../components/sections/LocationSection';
import { FinalCTA } from '../components/sections/FinalCTA';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MobileStickyBar } from '../components/layout/MobileStickyBar';

export const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex-1">
      {/* 1. Cinematic Entrance Hero */}
      <Hero />

      {/* 2. Editorial Signature Dish Layout */}
      <SignatureDish />

      {/* 3. 2D Interactive Misal Ingredient Anatomy */}
      <MisalExplosion />

      {/* 4. Interactive Spice Meter */}
      <SpiceMeter />

      {/* 5. Editorial Horizontal Sliding Menu (Refactored) */}
      <MenuExperience />

      {/* 6. Special Leak-Proof Travel Parcel Feature */}
      <ParcelFeature />

      {/* 7. Masonry Food Gallery */}
      <FoodGallery />

      {/* 8. Verified Customer Reviews & 4.1★ Rating */}
      <CustomerReviews />

      {/* 9. Practical Location, Hours & Directions */}
      <LocationSection />

      {/* 10. High Impact Final CTA */}
      <FinalCTA />
    </main>
    <Footer />
    <MobileStickyBar />
    </>
  );
};
