"use client";

import { useState } from "react";
import { MinistriesHero } from "@/components/Ministries/Ministrieshero";
import { PageIntro } from "@/components/Ministries/MinistriesIntro";
import { FilterNav } from "@/components/Ministries/FilterNav";
import { MinistriesGrid } from "@/components/Ministries/MinistriesGrid";
import { FeaturedSpotlight } from "@/components/Ministries/FeaturedMinistry";
// import { ImpactStats } from "@/components/Ministries/ImpactStats";
// import { TestimonialsCarousel } from "@/components/Ministries/TestimonialsSlider";
import { JoinMinistryCTA } from "@/components/Ministries/JoinMinistryCTA";
import { RelatedResources } from "@/components/Ministries/RelatedResources";

export default function MinistriesPage() {
  const [filter, setFilter] = useState("All");

  return (
    <main>
      <MinistriesHero />
      <PageIntro />
      <FilterNav onSelect={setFilter} />
      <MinistriesGrid category={filter} />
      <FeaturedSpotlight />
      {/* <ImpactStats /> */}
      {/* <TestimonialsCarousel /> */}
      <JoinMinistryCTA />
      <RelatedResources />
      {/* Sections 5–11 follow here */}
    </main>
  );
}
