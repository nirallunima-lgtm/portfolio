import { Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: '#',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-space-secondary">03.</span>{' '}
            <span className="text-foreground">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="bg-gradient-card border border-space-border rounded-3xl p-8 md:p-12 shadow-card animate-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-space-primary mb-4">What's Next?</h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Whether you have a question, want to collaborate on a project, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-2 text-foreground/60">
              <MapPin className="w-5 h-5" />
              <span>Available for remote collaboration</span>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow-strong transition-all duration-300 text-space-dark font-semibold px-8 py-3 rounded-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </Button>

            <div className="flex space-x-6 pt-6">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    className={`p-3 rounded-xl bg-space-border/50 hover:bg-space-border transition-all duration-300 hover:scale-110 text-space-glow ${link.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-foreground/40">
          <p>Designed & Built by Smriti Basnet</p>
        </div>
      </div>
    </section>
  );
};