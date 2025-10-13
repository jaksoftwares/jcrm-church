// // app/about/page.tsx

import { AboutHero } from "@/components/About/AboutHero";
import { ChurchIntro } from "@/components/About/ChurchIntro";
import { MissionVisionValues } from "@/components/About/MissionVisionValues";
// import { Beliefs } from "@/components/About/Beliefs";
import { StatementOfFaith } from "@/components/About/StatementOfFaith";
import { Leadership } from "@/components/About/Leadership";
// import { ChurchTimeline } from "@/components/About/ChurchTimeline";
// import { UniqueIdentity } from "@/components/About/UniqueIdentity";
import { MinistriesPreview } from "@/components/About/MinistriesPrev";
import { CallToActionBanner } from "@/components/Home/CallToAction";



export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <ChurchIntro />
      <MissionVisionValues />
      <StatementOfFaith/>
      {/* < Beliefs /> */}
      <Leadership />
      {/* < ChurchTimeline /> */}
      {/* <UniqueIdentity /> */}
      < MinistriesPreview />
      <CallToActionBanner />
      {/* Add other sections as needed */}
      {/* <MissionVision /> */}
      {/* <OurMinistries /> */}
      {/* <GetInvolved /> */}
      {/* other sections will follow here */}
    </main>
  );
}






