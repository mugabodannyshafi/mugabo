import React from 'react';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative bg-navy overflow-hidden">
      <div 
        className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full blur-[100px] opacity-20"
        style={{
          background: 'linear-gradient(to right, #4f46e5, #0a192f)'
        }}
      />

      <div 
        className="absolute bottom-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full blur-[100px] opacity-20"
        style={{
          background: 'linear-gradient(to right, #4f46e5, #0a192f)'
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;