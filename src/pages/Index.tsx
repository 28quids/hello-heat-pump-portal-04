import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import CTAButton from '@/components/CTAButton';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';
import MythsVsReality from '@/components/MythsVsReality';
import { Link } from 'react-router-dom';
import { 
  Shield,
  CheckCircle2, 
  ThumbsUp
} from 'lucide-react';

const Index = () => {
  // Animation on scroll effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section with Form */}
      <HeroSection />

      {/* Myths vs Reality Section */}
      <MythsVsReality />
      
      {/* CTA after Myths vs Reality */}
      <div className="py-6 md:py-10 bg-heat-50">
        <div className="section-container text-center !py-4 md:!py-0">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Ready to find your perfect installer?</h3>
          <CTAButton 
            onClick={scrollToTop}
            className="bg-heat-600 text-white hover:bg-heat-700"
          >
            Get Your Free Quotes Now
          </CTAButton>
        </div>
      </div>

      {/* Testimonials Section - Simplified */}
      <section id="testimonials" className="section-container bg-heat-100">
        <div className="fade-in-section">
          <SectionTitle 
            preTitle="Success Stories"
            title="What Our Users Say"
            description="Hear from homeowners who found their perfect installer through our service."
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="The process was so simple. I filled out the form and within 24 hours I had quotes from three reputable installers. I was able to compare and choose the best one for my needs."
              author="Sarah Johnson"
              role="Homeowner"
              company="London"
            />
            
            <TestimonialCard 
              quote="I was worried about finding a trustworthy installer, but this service took all the stress away. The installer I chose was professional, knowledgeable, and completed the work to a high standard."
              author="David Wilson"
              role="Homeowner"
              company="Manchester"
            />
            
            <TestimonialCard 
              quote="Using this service saved me hours of research. All three installers who contacted me were well-qualified and provided detailed quotes. I'm very happy with my new heat pump system."
              author="Emma Thompson"
              role="Homeowner"
              company="Edinburgh"
            />
          </div>
        </div>
      </section>

      {/* CTA after Testimonials */}
      <div className="py-6 md:py-10 bg-heat-50">
        <div className="section-container text-center !py-4 md:!py-0">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Join these satisfied homeowners today</h3>
          <CTAButton 
            onClick={scrollToTop}
            className="bg-heat-600 text-white hover:bg-heat-700"
          >
            Get Free Heat Pump Quotes
          </CTAButton>
        </div>
      </div>

      {/* FAQ Section - Keep this as it's valuable */}
      <FAQSection />

      {/* CTA after FAQ Section */}
      <div className="py-6 md:py-10 bg-heat-50">
        <div className="section-container text-center !py-4 md:!py-0">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Got more questions?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Our installer network can answer all your questions and provide personalized advice for your home.</p>
          <CTAButton 
            onClick={scrollToTop}
            className="bg-heat-600 text-white hover:bg-heat-700"
          >
            Connect With Installers Now
          </CTAButton>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="section-container bg-heat-600 text-white">
        <div className="fade-in-section">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Heat Pump Installer?</h2>
            <p className="text-xl mb-8 text-heat-100">Get your free quotes today and join thousands of satisfied homeowners.</p>
            <CTAButton 
              onClick={scrollToTop}
              size="lg"
              className="bg-white text-heat-700 hover:bg-heat-100"
            >
              Get Free Quotes Now
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="bg-heat-800 text-heat-200 py-8">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Green Home Path</h3>
              <p className="text-sm mb-4">Connecting homeowners with trusted heat pump installers across the UK.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-heat-200 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-heat-200 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-heat-200 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white transition-colors animated-underline">Home</Link></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors animated-underline">Testimonials</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors animated-underline">FAQs</a></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors animated-underline">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors animated-underline">Terms of Service</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@greenhomepath.com</span>
                </li>
              </ul>
              
              <div className="mt-6 flex flex-col md:flex-row gap-4 items-start">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-heat-600" />
                  <span className="text-xs">Vetted Installers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-heat-600" />
                  <span className="text-xs">No-Obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp className="h-5 w-5 text-heat-600" />
                  <span className="text-xs">Free Service</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-heat-700 mt-8 pt-8 text-sm text-center">
            <p>© {new Date().getFullYear()} Heat Pump Quotes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
