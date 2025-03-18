import { FC } from 'react';
import QuoteForm from './QuoteForm';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection: FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative w-full overflow-hidden pb-16 md:pb-24 md:pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-heat-100 to-heat-200" />
      
      {/* Content container */}
      <div className="relative section-container grid md:grid-cols-2 gap-8 items-center !py-0">
        {/* On mobile: headline first, then form */}
        <div className={`${isMobile ? 'order-1' : 'order-2 md:order-1'}`}>
          {/* Logo */}
          <div className="mb-4 md:mb-8 animate-fade-in flex justify-center md:justify-start">
            <img 
              src="/images/GREEN HOME PATH (2).svg" 
              alt="Green Home Path Logo" 
              className="h-64 sm:h-72 md:h-80 lg:h-96 w-auto"
            />
          </div>

          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-heat-700 uppercase bg-heat-200 rounded-full animate-fade-in">
            Free quotes from trusted installers
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 animate-fade-in">
            Hi Holly
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
            We connect you with certified local installers who offer competitive quotes on energy-efficient heat pump systems.
          </p>
          
          {/* Trust badges */}
          <div className="grid grid-cols-2 gap-4 items-center opacity-70 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold text-heat-800">300+</div>
              <div className="text-sm text-muted-foreground">Installers</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold text-heat-800">Free</div>
              <div className="text-sm text-muted-foreground">No-Obligation</div>
            </div>
          </div>
        </div>
        
        <div className={`${isMobile ? 'order-2' : 'order-1 md:order-2'}`}>
          <QuoteForm />
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
