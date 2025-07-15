// Orbital mechanics utilities for the solar system animation

export interface OrbitalData {
  x: number;
  y: number;
  angle: number;
}

export function calculateOrbitalPosition(
  time: number,
  orbitRadius: number,
  orbitSpeed: number,
  startAngle: number = 0
): OrbitalData {
  const angle = (time * orbitSpeed + startAngle) % (2 * Math.PI);
  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;
  
  return { x, y, angle };
}

export function getRandomStartingAngle(): number {
  return Math.random() * 2 * Math.PI;
}

export function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export function radiansToDegrees(radians: number): number {
  return radians * (180 / Math.PI);
}
