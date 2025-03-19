
// This helps resolve import issues with certain files
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

// Override the component tagger import that might be causing reference issues
declare module 'lovable-tagger' {
  export function componentTagger(): any;
}

// Ensure global types are properly recognized
/// <reference types="vite/client" />
