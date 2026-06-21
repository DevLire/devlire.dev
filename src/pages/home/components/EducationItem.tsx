import { ExternalLink } from 'lucide-react';
import type { Education } from '@/constants/education';

interface Props {
  education: Education;
}

export const EducationItem = ({ education }: Props) => {
  const hasUrl = Boolean(education.url);

  return (
    <div className="group relative mb-12 pl-6 last:mb-0 md:pl-8">
      {/* Nodo */}
      <div className="absolute top-2.5 left-[-6px] h-3 w-3 rounded-full bg-zinc-700 ring-4 ring-zinc-950 transition-colors duration-300 group-hover:bg-[#00F5D4]" />

      <div className="flex flex-col gap-3 text-left lg:grid lg:grid-cols-12 lg:items-start lg:gap-8">
        {/* Columna Izquierda */}
        <div className="flex flex-col gap-1 lg:col-span-5">
          {hasUrl ? (
            <a
              className="font-red-hat-display text-xl font-bold text-white transition-colors group-hover:text-[#00F5D4] hover:text-[#00F5D4] md:text-2xl"
              href={education.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              {education.title}
              <ExternalLink
                className="ml-2 inline-block shrink-0 -translate-y-0.5 text-[#00F5D4] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                size={18}
              />
            </a>
          ) : (
            <h4 className="font-red-hat-display text-xl font-bold text-white transition-colors group-hover:text-[#00F5D4] md:text-2xl">
              {education.title}
            </h4>
          )}

          <span className="text-base font-semibold text-zinc-300">
            {education.institution}
          </span>
          <span className="mt-0.5 font-mono text-xs text-zinc-500">
            {education.period}
          </span>
        </div>

        {/* Columna Derecha */}
        <div className="lg:col-span-7">
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
            {education.description}
          </p>
        </div>
      </div>
    </div>
  );
};
