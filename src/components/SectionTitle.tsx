import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  text: string;
  icon?: LucideIcon;
}

export const SectionTitle = (props: Props) => {
  if (props.icon) {
    return (
      <div className="font-red-hat-display flex flex-row gap-3 text-4xl font-bold tracking-tight text-white lg:text-6xl">
        <props.icon className="size-[1em]" />
        <h2>{props.text}</h2>
      </div>
    );
  }

  return (
    <h2 className="font-red-hat-display text-4xl font-bold tracking-tight text-white lg:text-6xl">
      {props.text}
    </h2>
  );
};
