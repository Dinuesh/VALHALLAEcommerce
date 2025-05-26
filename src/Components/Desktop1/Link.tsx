import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export const Link: React.FC<LinkProps> = ({ href, children, active }) => {
  return (
    <a 
      href={href} 
      className={`
        text-white font-medium 
        hover:text-blue-200 transition-colors
        px-3 py-2
        text-sm sm:text-base
        block sm:inline-block
        ${active ? 'border-b-2 border-white' : ''}
        rounded
        focus:outline-none focus:ring-2 focus:ring-blue-400
      `}
      role="link"
      tabIndex={0}
    >
      {children}
    </a>
  );
};
