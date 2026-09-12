import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { BackToTop } from '../components/Shared';
import { Situations, Manifesto, TherapyJourney, Methodology } from '../components/CoreSections';
import { About } from '../components/ProfileSections';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Layout';

export const Home = () => {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <main>
        <Hero />
        <Situations />
        <Manifesto />
        <TherapyJourney />
        <Methodology />
        <About />
        <Contact />
        <FAQ />
      </main>
      <BackToTop />
    </>
  );
};
