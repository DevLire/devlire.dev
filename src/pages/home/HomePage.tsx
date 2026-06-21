import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { EducationAndCertifications } from './components/EducationAndCertifications';

export const HomePage = () => {
  return (
    <>
      <Hero openToWork id="hero" />
      <Skills id="skills" />
      <Projects id="projects" />
      <AboutMe id="about-me" />
      <EducationAndCertifications id="education-and-certifications" />
    </>
  );
};
