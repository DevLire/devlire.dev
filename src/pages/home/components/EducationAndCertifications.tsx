import { SectionLayout } from '@/components/SectionLayout';
import { SectionTitle } from '@/components/SectionTitle';
import { educations } from '@/constants/education';
import type { BaseSectionProps } from '@/types';
import { GraduationCap } from 'lucide-react';
import { EducationItem } from './EducationItem';

export const EducationAndCertifications = ({ id }: BaseSectionProps) => {
  return (
    <SectionLayout id={id}>
      <SectionTitle icon={GraduationCap} text="Educación y Certificaciones" />

      <div className="mx-auto mt-6 w-full max-w-4xl">
        <div className="relative ml-3 border-l border-zinc-800 md:ml-4">
          {educations.map((item) => (
            <EducationItem key={item.title} education={item} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
