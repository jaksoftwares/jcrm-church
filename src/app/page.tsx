import React from 'react';
import Hero from '@/components/home/hero';
import WelcomeSection from '@/components/home/welcome'; 
import WeeklyServices from '@/components/home/weeklyServices';  
import WatchReadListen from '@/components/home/watchreadlisten';
import GetInvolved from '@/components/home/get-invoved';
import Events from '@/components/home/events';

const HomePage = () => {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <WeeklyServices />
      <WatchReadListen />
      <Events />
      <GetInvolved />
      {/* Additional content can go here */}

    </>
  );
};

export default HomePage;
