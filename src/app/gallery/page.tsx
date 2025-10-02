import { GalleryHero } from "@/components/Gallery/GalleryHero";
import { GalleryCategoryTabs } from "@/components/Gallery/GalleryCategoryTabs";
import { VideoHighlights } from "@/components/Gallery/VideoHighlights";

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryCategoryTabs />
      <VideoHighlights />
      {/* Upcoming sections: Filters, Grid, Videos, CTA */}
    </main>
  );
}
