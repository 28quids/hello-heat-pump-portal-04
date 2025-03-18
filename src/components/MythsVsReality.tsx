
import React from 'react';
import SectionTitle from './SectionTitle';
import { Check, X } from 'lucide-react';

interface MythRealityItemProps {
  myth: string;
  reality: string;
}

const MythRealityItem: React.FC<MythRealityItemProps> = ({ myth, reality }) => {
  return (
    <div className="glass-card p-6 shadow-soft transition-shadow hover:shadow-medium">
      <div className="mb-4 flex items-start gap-3">
        <div className="flex-shrink-0 bg-red-100 rounded-full p-1.5">
          <X className="h-4 w-4 text-red-600" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Myth:</h4>
          <p className="text-muted-foreground">{myth}</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 bg-green-100 rounded-full p-1.5">
          <Check className="h-4 w-4 text-green-600" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Reality:</h4>
          <p className="text-muted-foreground">{reality}</p>
        </div>
      </div>
    </div>
  );
};

const MythsVsReality: React.FC = () => {
  return (
    <section className="section-container py-16">
      <div className="fade-in-section">
        <SectionTitle 
          preTitle="Common Misconceptions"
          title="Myths vs Reality About Heat Pumps"
          description="Let's clear up some common misconceptions about heat pump installations."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MythRealityItem 
            myth="Heat pumps are too expensive to install and run."
            reality="While installation costs can be higher than traditional systems, heat pumps typically reduce energy bills by 30-50%, offering long-term savings. Government incentives can also offset initial costs."
          />
          
          <MythRealityItem 
            myth="Heat pumps don't work well in cold climates."
            reality="Modern heat pumps are designed to operate efficiently even in temperatures as low as -25°C, providing reliable heating year-round in all UK weather conditions."
          />
          
          <MythRealityItem 
            myth="The installation process is too disruptive."
            reality="Professional installers can typically complete a heat pump installation in 2-3 days with minimal disruption to your home and daily routine."
          />
          
          <MythRealityItem 
            myth="Heat pumps need lots of outdoor space."
            reality="Air source heat pumps require minimal outdoor space - just enough for a unit similar in size to an air conditioning unit. They can work with most property types."
          />
          
          <MythRealityItem 
            myth="Heat pumps are noisy and disruptive."
            reality="Modern heat pumps operate at around 40-60 decibels - similar to a refrigerator or dishwasher, and quieter than most gas boilers."
          />
          
          <MythRealityItem 
            myth="They require extensive home modifications."
            reality="While some homes may benefit from improved insulation, many modern UK homes require minimal modifications to efficiently utilize heat pump technology."
          />
        </div>
      </div>
    </section>
  );
};

export default MythsVsReality;
