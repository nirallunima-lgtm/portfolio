import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const ProjectCard = ({ title, description, technologies, github, demo }: ProjectCardProps) => {
  return (
    <div className="group bg-gradient-card border border-space-border rounded-2xl p-6 shadow-card hover:shadow-glow-strong transition-all duration-300 hover:scale-105 animate-slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-space-primary group-hover:text-space-secondary transition-colors duration-300">
          {title}
        </h3>
        <div className="flex space-x-2">
          {github && (
            <a 
              href={github}
              className="p-2 rounded-lg bg-space-border/50 hover:bg-space-border transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 text-space-glow" />
            </a>
          )}
          {demo && (
            <a 
              href={demo}
              className="p-2 rounded-lg bg-space-border/50 hover:bg-space-border transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 text-space-glow" />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-foreground/80 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-space-border/50 text-space-glow rounded-full border border-space-border/50"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};