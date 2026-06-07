'use client';

import { useEffect, useState } from 'react';

type Position = {
  x: number;
  y: number;
};

export function CursorGlow() {
  const [position, setPosition] = useState<Position>({ x: 240, y: 180 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const updatePosition = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setActive(true);
    };

    const hideGlow = () => setActive(false);

    window.addEventListener('pointermove', updatePosition);
    window.addEventListener('pointerleave', hideGlow);

    return () => {
      window.removeEventListener('pointermove', updatePosition);
      window.removeEventListener('pointerleave', hideGlow);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute h-80 w-80 rounded-full blur-3xl transition-opacity duration-300"
        style={{
          opacity: active ? 0.38 : 0.18,
          left: position.x - 160,
          top: position.y - 160,
          background: `radial-gradient(circle, hsl(${(position.x + position.y) % 360} 90% 78% / 0.55) 0%, hsl(${(position.x + position.y) % 360} 95% 66% / 0.25) 28%, rgba(255,255,255,0.1) 46%, transparent 72%)`
        }}
      />
    </div>
  );
}