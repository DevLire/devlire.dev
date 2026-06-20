import type { Skill } from '@/constants/skills';
import { Badge } from './ui/badge';

interface Props {
  skill: Skill;
}

export const CustomBadge = ({ skill }: Props) => {
  const hexColor = skill.iconColor.match(/\[(#[A-Fa-f0-9]{6})\]/)?.[1];

  return (
    <Badge
      className="gap-2"
      style={{
        backgroundColor: hexColor ? `${hexColor}1A` : undefined,
        borderColor: hexColor,
      }}
      variant="outline"
    >
      <div
        className={`h-[1em] w-[1em] ${skill.iconColor}`}
        style={{
          maskImage: `url(${skill.src})`,
          WebkitMaskImage: `url(${skill.src})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />
      {skill.title}
    </Badge>
  );
};
