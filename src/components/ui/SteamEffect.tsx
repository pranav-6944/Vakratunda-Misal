import React from 'react';

interface SteamEffectProps {
  className?: string;
  intensity?: 'light' | 'medium' | 'high';
}

export const SteamEffect: React.FC<SteamEffectProps> = ({ className = '', intensity = 'medium' }) => {
  const particleCount = intensity === 'high' ? 7 : intensity === 'medium' ? 5 : 3;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: particleCount }).map((_, i) => {
        const left = 25 + (i * 12) + (Math.sin(i) * 6);
        const delay = i * 0.8;
        const duration = 3.8 + (i % 3) * 0.7;
        const size = 32 + (i % 3) * 16;

        return (
          <div
            key={i}
            className="steam-particle"
            style={{
              left: `${left}%`,
              bottom: '30%',
              width: `${size}px`,
              height: `${size * 1.4}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
};
