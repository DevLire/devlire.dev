import type { Skill } from '@/constants/skills';
import { useHoverScaleAnimation } from '@/hooks/useHoverScaleAnimation';
import { cn } from '@/lib/utils';

interface Props {
  skill: Skill;
  className?: string;
}

export const SkillItem = ({ skill, className }: Props) => {
  const { isScaled, handleMouseEnter, handleMouseLeave } =
    useHoverScaleAnimation();

  return (
    <div
      className={cn(
        'grid justify-items-center gap-3 text-center transition-transform duration-300',
        isScaled && 'scale-110',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`h-[3em] w-[3em] ${skill.iconColor}`}
        style={{
          maskImage: `url(${skill.src})`,
          WebkitMaskImage: `url(${skill.src})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />
      <p className="font-medium">{skill.title}</p>
    </div>
  );
};
