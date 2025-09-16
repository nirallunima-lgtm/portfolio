import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'AI Club Member',
      organization: 'School AI Club',
      period: '2024 - Present',
      location: 'School',
      type: 'Leadership',
      description: 'Active member exploring artificial intelligence concepts and machine learning fundamentals. Collaborate with peers on AI projects and share knowledge through presentations.',
      achievements: [
        'Led team projects on AI basics and machine learning',
        'Organized knowledge-sharing sessions with club members',
        'Researched and presented on emerging AI technologies'
      ],
      skills: ['AI Fundamentals', 'Machine Learning', 'Python', 'Research', 'Team Collaboration']
    },
    {
      title: 'Young Developer',
      organization: 'Personal Projects',
      period: '2023 - Present',
      location: 'Self-taught',
      type: 'Development',
      description: 'Self-motivated learning journey in programming and technology. Built multiple projects using various technologies including IoT, desktop applications, and web development.',
      achievements: [
        'Developed Smart Electric Car Charging System with IoT integration',
        'Created Hospital Management System with complete GUI',
        'Learned multiple programming languages and frameworks'
      ],
      skills: ['Python', 'React', 'IoT', 'Arduino', 'Tkinter', 'Problem Solving']
    },
    {
      title: 'Student Innovator',
      organization: 'Academic Projects',
      period: '2023 - 2024',
      location: 'School',
      type: 'Academic',
      description: 'Focused on innovative projects that combine technology with real-world problem solving. Emphasis on IoT applications and software development.',
      achievements: [
        'Recognized for innovative approach to technology projects',
        'Completed advanced coursework in programming and technology',
        'Mentored younger students in coding basics'
      ],
      skills: ['Innovation', 'Project Management', 'Mentoring', 'Technical Writing']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Leadership':
        return 'bg-space-secondary/20 text-space-secondary border-space-secondary/30';
      case 'Development':
        return 'bg-space-primary/20 text-space-primary border-space-primary/30';
      case 'Academic':
        return 'bg-space-glow/20 text-space-glow border-space-glow/30';
      default:
        return 'bg-space-border/50 text-space-glow border-space-border/50';
    }
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-space-secondary">03.</span>{' '}
            <span className="text-foreground">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div 
              key={experience.title}
              className="group bg-gradient-card border border-space-border rounded-2xl p-8 shadow-card hover:shadow-glow-strong transition-all duration-300 hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-space-primary group-hover:text-space-secondary transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <Badge className={`${getTypeColor(experience.type)} border`}>
                      {experience.type}
                    </Badge>
                  </div>
                  
                  <p className="text-xl text-space-glow font-medium mb-3">
                    {experience.organization}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/70 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-space-secondary" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-space-secondary" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-foreground/80 mb-6 leading-relaxed">
                {experience.description}
              </p>

              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-lg font-semibold text-space-primary mb-3">
                  <Award className="w-5 h-5 text-space-secondary" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3 text-foreground/80">
                      <div className="w-2 h-2 bg-space-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-space-primary mb-3">Skills & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium bg-space-border/50 text-space-glow rounded-full border border-space-border/50 hover:bg-space-border transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};