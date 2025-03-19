
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  name: string;
  location?: string;
  text: string;
  avatarSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  text,
  avatarSrc
}) => {
  // Create initials from the name for the avatar fallback
  const getInitials = (fullName: string) => {
    if (!fullName) return '??';
    
    const names = fullName.split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    
    return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
      <div className="flex-grow">
        <p className="text-slate-700 italic mb-6">"{text}"</p>
      </div>
      <div className="flex items-center mt-4">
        <Avatar className="h-12 w-12 mr-4">
          {avatarSrc && <AvatarImage src={avatarSrc} alt={name} />}
          <AvatarFallback className="bg-heat-100 text-heat-800">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-slate-900">{name}</p>
          {location && <p className="text-sm text-slate-500">{location}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
