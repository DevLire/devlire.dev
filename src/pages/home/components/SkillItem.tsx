import type { Skill } from '@/constants/skills';
import { cn } from '@/lib/utils';

interface Props {
  skill: Skill;
  className?: string;
}

export const SkillItem = ({ skill, className }: Props) => {
  return (
    <div
      className={cn('grid justify-items-center gap-3 text-center', className)}
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
