import { Hero } from './components/Hero';
import { Skills } from './components/Skills';

export const HomePage = () => {
  return (
    <>
      <Hero openToWork id="hero" />
      <Skills id="skills" />
    </>
  );
};
