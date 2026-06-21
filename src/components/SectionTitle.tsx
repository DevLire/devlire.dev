import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  text: string;
  icon?: LucideIcon;
}

export const SectionTitle = ({ text, icon: Icon }: Props) => {
  return (
    <h2 className="font-red-hat-display w-full text-center text-4xl font-bold tracking-tight text-balance text-white lg:text-6xl">
      {Icon && (
        <Icon className="mr-3 inline-block size-[1em] translate-y-[-0.05em]" />
      )}
      {text}
    </h2>
  );
};
