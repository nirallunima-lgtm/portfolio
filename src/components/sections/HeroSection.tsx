import { Button } from '@/components/ui/button';
import { TypingText } from '../TypingText';
import { Download, Github, Linkedin, Instagram } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 pt-24">
      {/* Social Media Icons - Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-40">
        <a href="#" className="p-3 text-foreground/60 hover:text-space-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="p-3 text-foreground/60 hover:text-space-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="p-3 text-foreground/60 hover:text-space-primary transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
      </div>

      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-6">
            <span className="text-space-secondary text-lg font-medium">Hello there 👋</span>
          </div>
          
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">I'm </span>
              <span className="inline-block bg-gradient-primary px-4 py-2 rounded-lg text-space-dark font-bold">
                Smriti Basnet
              </span>
            </h1>
            
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              <TypingText 
                text="a"
                speed={200}
                className="text-foreground"
              />
            </div>
          </div>
          
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-xl">
            12-year-old Student, Developer & Innovator | Building IoT Projects 🚀 | Python Enthusiast | React Learner | AI Club Member
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-strong transition-all duration-300 text-space-dark font-semibold px-8 py-3 rounded-xl"
          >
            <Download className="mr-2 h-5 w-5" />
            Resume
          </Button>
        </div>
        
        {/* Right Profile Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* Main Profile Circle */}
            <div className="w-80 h-80 rounded-full border-4 border-space-primary/30 flex items-center justify-center relative overflow-hidden bg-gradient-card">
              <img 
                src={profilePhoto} 
                alt="Smriti Basnet" 
                className="w-72 h-72 rounded-full object-cover"
              />
              
              {/* Tech Icons around the circle */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-card border-2 border-space-border rounded-full flex items-center justify-center shadow-glow">
                <span className="text-2xl">⚛️</span>
              </div>
              
              <div className="absolute top-20 -right-8 w-14 h-14 bg-gradient-card border-2 border-space-border rounded-full flex items-center justify-center shadow-glow">
                <span className="text-xl">🐍</span>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-card border-2 border-space-border rounded-full flex items-center justify-center shadow-glow">
                <span className="text-2xl">🤖</span>
              </div>
              
              <div className="absolute bottom-20 -left-8 w-14 h-14 bg-gradient-card border-2 border-space-border rounded-full flex items-center justify-center shadow-glow">
                <span className="text-xl">🔧</span>
              </div>
              
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-card border-2 border-space-border rounded-full flex items-center justify-center shadow-glow">
                <span className="text-2xl">📡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};