
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/GREEN HOME PATH (1).svg" 
                alt="Green Home Path Logo" 
                className="h-10 w-auto invert"
              />
              <span className="ml-2 font-semibold text-lg">Green Home Path</span>
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <Link to="/terms-of-service" className="hover:text-green-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy-policy" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-slate-400 text-sm">
          © {currentYear} Green Home Path. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
