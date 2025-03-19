
import React from 'react';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  avatarUrl,
  className
}) => {
  return (
    <div className={cn(
      'glass-card p-6 md:p-8 hover:shadow-medium transition-all duration-300',
      className
    )}>
      <svg className="w-8 h-8 text-heat-500 mb-4 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <p className="text-lg leading-relaxed mb-6">{quote}</p>
      <div className="flex items-center">
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={author} 
            className="w-10 h-10 rounded-full mr-4 object-cover" 
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-heat-200 text-heat-700 flex items-center justify-center mr-4 font-bold">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium text-foreground">{author}</p>
          {(role || company) && (
            <p className="text-sm text-muted-foreground">
              {role}{role && company && ", "}{company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
