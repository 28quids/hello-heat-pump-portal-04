
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-heat-700">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you use our service, including your name, address, email address, phone number, and details about your home relevant to heat pump installation.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use your information to connect you with heat pump installers, provide you with quotes, improve our services, and communicate with you about our services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Information Sharing</h2>
          <p>We share your information with heat pump installers in our network to provide you with quotes. We may also share your information with service providers who assist us in operating our website and conducting our business.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to track activity on our website and to hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
          <p>Depending on your location, you may have rights regarding your personal information, such as the right to access, correct, or delete your personal data. Please contact us to exercise these rights.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at info@greenhomepath.com.</p>
        </div>
        
        <div className="mt-8">
          <Link to="/" className="text-heat-600 hover:text-heat-800 font-medium">&larr; Back to Home</Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
