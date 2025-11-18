import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ReferralSection from './components/ReferralSection';
import { Page } from './App';

interface HomePageProps {
  setPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setPage }) => {
  return (
    <>
      <Hero />
      <HowItWorks setPage={setPage} />
      <ReferralSection />
    </>
  );
};

export default HomePage;
