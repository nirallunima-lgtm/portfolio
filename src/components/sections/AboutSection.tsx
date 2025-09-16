import { SkillBadge } from '../SkillBadge';
import profilePhoto from '@/assets/profile-photo.png';

export const AboutSection = () => {
  const skills = [
    'Python', 'React', 'Tkinter', 'IoT', 'Arduino', 
    'File Handling', 'AI Basics', 'Problem Solving'
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-space-secondary">01.</span>{' '}
            <span className="text-foreground">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-space-border shadow-glow">
                  <img 
                    src={profilePhoto}
                    alt="Smriti Basnet"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 rounded-3xl -z-10 blur-xl"></div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              Hi, I'm Smriti. I love working on creative coding projects. Recently, I've built a{' '}
              <span className="text-space-primary font-semibold">Smart Electric Car Charging System</span>{' '}
              using IoT (sensors + automation), a{' '}
              <span className="text-space-primary font-semibold">Hospital Management System</span>{' '}
              (with file handling, Tkinter GUI, and doctor-patient management), and multiple coursework projects.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              I enjoy learning React, Python, and problem solving. I'm part of an{' '}
              <span className="text-space-primary font-semibold">AI Club</span>{' '}
              where we explore Artificial Intelligence together.
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-space-glow mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};