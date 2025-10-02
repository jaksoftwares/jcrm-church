import React from 'react';
// import Hero from '@/components/home/hero';

// import WelcomeSection from '@/components/home/welcome'; 

// import WeeklyServices from '@/components/home/weeklyServices';  
// import WatchReadListen from '@/components/home/watchreadlisten';
// import GetInvolved from '@/components/home/get-invoved';
// import Events from '@/components/home/events';import { Hero } from '@/components/Home/Hero';
// import Hero from '@/components/home/hero';
import { Hero } from '@/components/Home/Hero';
import { AboutHighlight } from "@/components/Home/AboutHighlight";
import { MinistriesPreview } from '@/components/Home/Ministries';
import { SermonsPreview } from '@/components/Home/SermonsPreview';
import { UpcomingEvents } from '@/components/Home/UpcomingEvents';
// import { GalleryHighlight } from '@/components/Home/GalleryHighlight';
import { CallToActionBanner } from '@/components/Home/CallToAction';


const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutHighlight />
      <MinistriesPreview />
      <SermonsPreview/>
      <UpcomingEvents />
      {/* <GalleryHighlight /> */}
      <CallToActionBanner />
      {/* Uncomment the following components as needed */}
      {/* <Hero /> */}
      {/* <WelcomeSection /> */}
      {/* <WeeklyServices /> */}
      {/* <WatchReadListen /> */}
      {/* <Events /> */}
      {/* <GetInvolved /> */}
      {/* Additional content can go here */}

    </>
  );
};

export default HomePage;
