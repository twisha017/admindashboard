import { useEffect, useState } from "react";
import Planet from "./planet";
import { PLANETS } from "@/lib/planet-data";

export default function SolarSystem() {
  const [randomizedPlanets, setRandomizedPlanets] = useState(PLANETS);

  useEffect(() => {
    // Randomize starting positions
    const randomized = PLANETS.map(planet => ({
      ...planet,
      startDelay: Math.random() * -20 // Random negative delay for different starting positions
    }));
    setRandomizedPlanets(randomized);
  }, []);

  return (
    <div className="solar-system relative w-full h-full flex items-center justify-center">
      {/* Orbital Rings */}
      {PLANETS.map((planet, index) => (
        <div
          key={`orbit-${index}`}
          className="orbit-ring"
          style={{
            width: `${planet.orbitRadius * 2}px`,
            height: `${planet.orbitRadius * 2}px`,
          }}
        />
      ))}
      
      {/* Sun (Center) */}
      <div className="sun-container group cursor-pointer">
        <div className="sun bg-gradient-to-r from-yellow-400 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center font-bold text-sm text-gray-900 animate-pulse-glow">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          </svg>
        </div>
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/20 z-50">
          Full Stack Developer<br />Computer Engineer
        </div>
      </div>
      
      {/* Planets */}
      {randomizedPlanets.map((planet, index) => (
        <Planet
          key={index}
          {...planet}
          startDelay={planet.startDelay || 0}
        />
      ))}
    </div>
  );
}
