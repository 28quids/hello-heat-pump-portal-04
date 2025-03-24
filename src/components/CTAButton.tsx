import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  icon?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  onClick,
  href = '#quote-form',
  variant = 'default',
  size = 'default',
  className,
  icon = true
}) => {
  const buttonContent = (
    <>
      <span>{children}</span>
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only prevent default for quote form link
    if (href === '#quote-form') {
      e.preventDefault();
      const element = document.getElementById('quote-form');
      if (element) {
        const yOffset = -80; // Offset for header
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  if (onClick) {
    return (
      <Button
        onClick={onClick}
        variant={variant}
        size={size}
        className={cn("group", className)}
      >
        {buttonContent}
      </Button>
    );
  }

  return (
    <a href={href} onClick={handleClick}>
      <Button
        variant={variant}
        size={size}
        className={cn("group", className)}
      >
        {buttonContent}
      </Button>
    </a>
  );
};

export default CTAButton;
