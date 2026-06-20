import { SectionTitle } from '@/components/SectionTitle';
import { projects } from '@/constants/projects';
import { Terminal } from 'lucide-react';
import { ProjectItem } from './ProjectItem';

interface Props {
  id?: string;
}

export const Projects = ({ id }: Props) => {
  return (
    <section
      className="relative flex w-full scroll-mt-20 items-center justify-center overflow-hidden py-20 text-white md:py-12 2xl:py-32"
      id={id}
    >
      <div className="relative z-10 container mx-auto px-4 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-10">
          <SectionTitle icon={Terminal} text="Proyectos" />
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center gap-12 2xl:max-w-6xl">
          <div className="flex w-full flex-wrap items-center justify-center gap-12 md:gap-20">
            {projects.map((project) => (
              <ProjectItem
                key={project.title}
                className="text-2xl"
                project={project}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
