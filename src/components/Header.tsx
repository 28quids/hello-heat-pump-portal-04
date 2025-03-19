
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import CTAButton from './CTAButton';

const Header: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('quote-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/GREEN HOME PATH.svg" 
            alt="Green Home Path Logo" 
            className="h-10 w-auto"
          />
          <span className="ml-2 text-heat-700 font-semibold text-lg hidden md:inline-block">Green Home Path</span>
        </Link>
        
        <CTAButton 
          onClick={scrollToForm}
          size="sm"
          className={cn(
            "bg-heat-600 text-white hover:bg-heat-700",
            "text-sm px-4 py-2"
          )}
        >
          Get Free Quote
        </CTAButton>
      </div>
    </header>
  );
};

export default Header;
