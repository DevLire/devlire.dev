import { CustomCard } from '@/components/CustomCard';
import { useHoverScaleAnimation } from '@/hooks/useHoverScaleAnimation';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export interface Objective {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface Props {
  objetive: Objective;
}

export const ObjetiveCard = ({ objetive }: Props) => {
  const { isScaled, handleMouseEnter, handleMouseLeave } =
    useHoverScaleAnimation();

  return (
    <CustomCard
      className={cn(
        'flex w-full flex-col gap-2 p-3 transition-transform duration-300 lg:p-5',
        isScaled && 'scale-[1.015]'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center gap-2 text-xl md:gap-4">
        <objetive.icon className="size-6 shrink-0" />{' '}
        <h4 className="font-red-hat-display leading-tight font-bold">
          {objetive.title}
        </h4>
      </div>

      <p>{objetive.description}</p>
    </CustomCard>
  );
};
