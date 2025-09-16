interface SkillBadgeProps {
  skill: string;
  index: number;
}

export const SkillBadge = ({ skill, index }: SkillBadgeProps) => {
  return (
    <div 
      className="px-4 py-2 bg-gradient-card border border-space-border rounded-xl text-sm font-medium text-space-glow hover:bg-space-border/50 transition-all duration-300 hover:scale-105 animate-scale-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {skill}
    </div>
  );
};