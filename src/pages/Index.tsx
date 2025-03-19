import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemCard from '@/components/ProblemCard';
import SectionTitle from '@/components/SectionTitle';
import BenefitCard from '@/components/BenefitCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQSection from '@/components/FAQSection';
import MythsVsReality from '@/components/MythsVsReality';
import QuoteForm from '@/components/QuoteForm';
import CTAButton from '@/components/CTAButton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const problemsData = [
  {
    title: "Rising Energy Costs",
    description: "Traditional energy costs are unpredictable and often increase, impacting your budget.",
    icon: "📈",
  },
  {
    title: "Environmental Impact",
    description: "Fossil fuels contribute to pollution and climate change, affecting our planet's health.",
    icon: "🌍",
  },
  {
    title: "Limited Resources",
    description: "Fossil fuels are finite, leading to concerns about long-term energy availability.",
    icon: "⏳",
  },
];

const benefitsData = [
  {
    title: "Save Money",
    description: "Reduce or eliminate your electricity bills with solar energy.",
    icon: "💰",
  },
  {
    title: "Eco-Friendly",
    description: "Solar power is a clean, renewable energy source that reduces your carbon footprint.",
    icon: "🌱",
  },
  {
    title: "Increase Home Value",
    description: "Homes with solar panels are more attractive to buyers and can increase property value.",
    icon: "🏡",
  },
];

const testimonialsData = [
  {
    name: "John Doe",
    testimonial: "Switching to solar was the best decision I've made! My energy bills are so much lower now.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    testimonial: "I love knowing that I'm doing my part to help the environment while saving money at the same time.",
    rating: 4,
  },
  {
    name: "Mike Johnson",
    testimonial: "The installation process was smooth and the team was very professional. Highly recommend!",
    rating: 5,
  },
];

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('quote-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        <HeroSection />
        
        {/* Problems Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="The Growing Energy Problem"
              subtitle="Why Homeowners Are Making The Switch"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {problemsData.map((problem, index) => (
                <ProblemCard key={index} {...problem} />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <CTAButton onClick={scrollToForm}>Get Your Free Quote Today</CTAButton>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Benefits of Solar Energy"
              subtitle="Why Solar Power Is The Smart Choice"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {benefitsData.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <CTAButton onClick={scrollToForm}>Start Saving Today</CTAButton>
            </div>
          </div>
        </section>

        {/* Myths vs Reality Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Solar Myths vs Reality"
              subtitle="Debunking Common Misconceptions"
            />
            <MythsVsReality />
            <div className="flex justify-center mt-12">
              <CTAButton onClick={scrollToForm}>Get The Facts</CTAButton>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="What Our Customers Say"
              subtitle="Real Experiences From Real Homeowners"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <CTAButton onClick={scrollToForm}>Join Satisfied Customers</CTAButton>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Everything You Need To Know About Solar"
            />
            <div className="mt-12 max-w-3xl mx-auto">
              <FAQSection />
            </div>
            <div className="flex justify-center mt-12">
              <CTAButton onClick={scrollToForm}>Get Your Questions Answered</CTAButton>
            </div>
          </div>
        </section>

        {/* Quote Form Section */}
        <section id="quote-form" className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Get Your Free Solar Quote"
              subtitle="Find Out How Much You Can Save"
            />
            <div className="mt-12 max-w-xl mx-auto">
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
