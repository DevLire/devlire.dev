import { HeroTechLogistics } from './components/HeroTechLogistics';
import { ObjectivesTechLogistics } from './components/ObjectivesTechLogistics';
import { ArchitectureTechLogistics } from './components/ArchitectureTechLogistics';

const TechLogisticsPage = () => {
  return (
    <>
      <HeroTechLogistics id="hero" />
      <ObjectivesTechLogistics id="challenge" />
      <ArchitectureTechLogistics id="tabs" />
    </>
  );
};

export default TechLogisticsPage;
