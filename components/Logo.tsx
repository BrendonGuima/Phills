import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'full' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="https://i.imgur.com/HkHWiYh.png"
        alt="Phills Photography Logo" 
        className={`object-contain filter ${
            // Removing specific heights here to allow the parent class to fully control size
            'w-auto h-full' 
        }`}
        style={{ maxHeight: '100%' }}
      />
    </div>
  );
};

export default Logo;