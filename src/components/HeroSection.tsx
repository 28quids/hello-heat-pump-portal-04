import { FC } from 'react';
import CTAButton from './CTAButton';

const HeroSection: FC = () => {
  return (
    <section className="relative w-full overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-heat-100 to-heat-200" />
      
      {/* Content container */}
      <div className="relative section-container">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-heat-700 uppercase bg-heat-200 rounded-full animate-fade-in">
            Compare quotes from trusted installers
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto animate-fade-in">
            Find The Perfect Heat Pump Installer For Your Home
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up">
            We connect you with certified local installers who offer competitive quotes on energy-efficient heat pump systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up">
            <CTAButton href="#quote-form" size="lg">
              Get Free Quotes
            </CTAButton>
            <CTAButton href="#how-it-works" variant="outline" size="lg" icon={false}>
              Learn How It Works
            </CTAButton>
          </div>
          
          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center w-full max-w-3xl mx-auto opacity-70 animate-fade-in-up">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-heat-800">300+</div>
              <div className="text-sm text-muted-foreground">Certified Installers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-heat-800">5,000+</div>
              <div className="text-sm text-muted-foreground">Matches Made</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-heat-800">4.9/5</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-heat-800">Free</div>
              <div className="text-sm text-muted-foreground">No-Obligation Quotes</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-[60px] text-background fill-current" 
          style={{transform: 'scaleY(-1)'}}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
