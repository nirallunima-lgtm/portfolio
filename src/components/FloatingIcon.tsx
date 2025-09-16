import { ReactNode } from 'react';

interface FloatingIconProps {
  children: ReactNode;
  position: string;
  delay?: number;
}

export const FloatingIcon = ({ children, position, delay = 0 }: FloatingIconProps) => {
  return (
    <div
      className={`absolute ${position} animate-float opacity-80 hover:opacity-100 transition-all duration-300`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 bg-gradient-card border border-space-border rounded-xl flex items-center justify-center shadow-glow hover:shadow-glow-strong transition-all duration-300 hover:scale-110">
        {children}
      </div>
    </div>
  );
};