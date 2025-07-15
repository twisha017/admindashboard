import { useEffect, useState } from "react";

interface PlanetProps {
  name: string;
  skill: string;
  description: string;
  color: string;
  size: number;
  orbitRadius: number;
  orbitDuration: number;
  icon: () => React.ReactNode;
  startDelay: number;
  hasRings?: boolean;
}

export default function Planet({
  name,
  skill,
  description,
  color,
  size,
  orbitRadius,
  orbitDuration,
  icon,
  startDelay,
  hasRings = false,
}: PlanetProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="planet absolute cursor-pointer group"
      style={{
        '--orbit-radius': `${orbitRadius}px`,
        animation: `orbit ${orbitDuration}s linear infinite`,
        animationDelay: `${startDelay}s`,
        width: `${size}px`,
        height: `${size}px`,
        left: '50%',
        top: '50%',
        marginLeft: `-${size / 2}px`,
        marginTop: `-${size / 2}px`,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Planet Body */}
      <div
        className={`w-full h-full rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ${
          isHovered ? 'scale-125 planet-glow' : ''
        }`}
        style={{
          backgroundColor: color,
          fontSize: `${Math.max(size / 4, 8)}px`,
        }}
      >
        {icon()}
      </div>
      
      {/* Saturn's Rings */}
      {hasRings && (
        <div
          className="absolute border-2 border-purple-400/60 rounded-full pointer-events-none"
          style={{
            width: `${size * 1.8}px`,
            height: `${size * 1.2}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.7,
          }}
        />
      )}
      
      {/* Tooltip */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/20 z-50">
        <div className="font-bold">{skill}</div>
        <div className="text-xs text-gray-300">{description}</div>
      </div>
    </div>
  );
}
