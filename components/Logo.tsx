import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'full' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="https://photos.smugmug.com/photos/i-P6xTDKh/0/KHgV3FsHVDGSvM2D4bRSGbCXddbZrMvxcx6GGt9tB/300x102/i-P6xTDKh-300x102.png" 
        alt="Phills Photography Logo" 
        className={`object-contain filter invert brightness-0 ${
            // Removing specific heights here to allow the parent class to fully control size
            'w-auto h-full' 
        }`}
        style={{ maxHeight: '100%' }}
      />
    </div>
  );
};

export default Logo;