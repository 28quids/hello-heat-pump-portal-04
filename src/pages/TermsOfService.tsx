
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-heat-700">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to Green Home Path ("we," "our," or "us"). By accessing or using our website, you agree to be bound by these Terms of Service.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
          <p>Green Home Path provides a platform connecting homeowners with trusted heat pump installers. We do not perform installations ourselves but facilitate the connection between homeowners and qualified installers.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
          <p>When using our service, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Quotes and Installations</h2>
          <p>The quotes provided through our platform are estimates provided by third-party installers. We do not guarantee the accuracy of these quotes or the quality of installations. We recommend that you verify all information with the installer before proceeding with any work.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p>Green Home Path is not liable for any damages arising from the use of our services or from any installations arranged through our platform. We act solely as an intermediary and do not provide any guarantees regarding the quality of work performed by installers.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Continued use of the platform after such changes constitutes your acceptance of the new Terms.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact</h2>
          <p>If you have any questions about these Terms, please contact us at info@greenhomepath.com.</p>
        </div>
        
        <div className="mt-8">
          <Link to="/" className="text-heat-600 hover:text-heat-800 font-medium">&larr; Back to Home</Link>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
