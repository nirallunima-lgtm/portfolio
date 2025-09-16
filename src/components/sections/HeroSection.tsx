import { Button } from '@/components/ui/button';
import { TypingText } from '../TypingText';
import { FloatingIcon } from '../FloatingIcon';
import { Download, Mail } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      {/* Floating Tech Icons */}
      <FloatingIcon position="top-20 left-20" delay={0}>
        <div className="text-yellow-400">🐍</div>
      </FloatingIcon>
      <FloatingIcon position="top-32 right-32" delay={1}>
        <div className="text-cyan-400">⚛️</div>
      </FloatingIcon>
      <FloatingIcon position="bottom-32 left-32" delay={2}>
        <div className="text-green-400">🔧</div>
      </FloatingIcon>
      <FloatingIcon position="bottom-20 right-20" delay={3}>
        <div className="text-blue-400">📡</div>
      </FloatingIcon>

      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6">
          <span className="text-space-secondary text-lg font-medium">Hello there 👋</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-foreground">I'm </span>
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Smriti Basnet
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl mb-8 h-8">
          <TypingText 
            text="a Developer, Student & Innovator"
            speed={100}
            className="text-space-glow"
          />
        </div>
        
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Exploring coding, IoT, and smart projects | Python | React | Beginner but passionate learner
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-strong transition-all duration-300 text-space-dark font-semibold px-8 py-3 rounded-xl"
          >
            <Download className="mr-2 h-5 w-5" />
            Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-space-border bg-space-card/50 hover:bg-space-card text-space-glow hover:shadow-glow transition-all duration-300 px-8 py-3 rounded-xl"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};