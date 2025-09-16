import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-space-primary">
          &lt;SB/&gt;
        </div>
        
        {/* Center Navigation */}
        <div className="bg-space-card/80 backdrop-blur-md border border-space-border rounded-full px-8 py-3">
          <div className="flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionClick(section.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-space-primary ${
                  activeSection === section.id ? 'text-space-primary' : 'text-foreground/70'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Contact Me Button */}
        <Button 
          variant="outline"
          className="border-space-primary text-space-primary hover:bg-space-primary hover:text-space-dark"
          onClick={() => onSectionClick('contact')}
        >
          Contact Me
        </Button>
      </div>
    </nav>
  );
};