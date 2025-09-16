interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export const Navigation = ({ activeSection, onSectionClick }: NavigationProps) => {
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-space-card/80 backdrop-blur-md border border-space-border rounded-full px-6 py-3 shadow-card">
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
    </nav>
  );
};