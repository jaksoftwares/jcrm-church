"use client";

import { SermonsHero } from "@/components/Sermons/SermonsHero";
import { SermonFilterBar } from "@/components/Sermons/SermonFilterBar";
import { LatestSermonHighlight } from "@/components/Sermons/LatestSermonHighlight";
import { SermonsGrid } from "@/components/Sermons/SermonsGrid";
import SermonThemesSection from "@/components/Sermons/SermonThemesSection";
import AudioLibrarySection from "@/components/Sermons/AudioLibrarySection";
import SermonSubscriptionCTA from "@/components/Sermons/SermonsCTA";



export default function SermonsPage() {
  return (
    <main>
      <SermonsHero />
      <LatestSermonHighlight />
      <SermonFilterBar onFilterChange={(filters) => console.log(filters)} />
      <SermonsGrid />
      <SermonThemesSection />
      <AudioLibrarySection />
      <SermonSubscriptionCTA />


      {/* Sections 2+ will follow here */}
    </main>
  );
}
