import { ProjectCard } from '../ProjectCard';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Smart Electric Car Charging System',
      description: 'An IoT-based system using sensors and automation to efficiently manage electric vehicle charging. Features real-time monitoring and energy optimization.',
      technologies: ['IoT', 'Sensors', 'Arduino', 'Energy Management', 'Automation'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Hospital Management System',
      description: 'A comprehensive desktop application with Tkinter GUI featuring admin, doctor, and patient modules. Includes file handling for data persistence and user management.',
      technologies: ['Python', 'Tkinter', 'File Handling', 'GUI', 'Database Management'],
      github: '#'
    },
    {
      title: 'AI Club Activities',
      description: 'Collaborative learning environment where we explore AI concepts, machine learning basics, and share knowledge with peers through interactive projects.',
      technologies: ['AI Basics', 'Machine Learning', 'Python', 'Collaboration', 'Research'],
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-space-secondary">04.</span>{' '}
            <span className="text-foreground">My Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} style={{ animationDelay: `${index * 0.2}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};