import React, { useEffect, useState } from 'react';

export const CursorSpotlight: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setPosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.body.addEventListener('pointerleave', handlePointerLeave);
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.body.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500 overflow-hidden"
      style={{
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.07), rgba(6, 182, 212, 0.03) 40%, transparent 80%)`,
      }}
      aria-hidden="true"
    />
  );
};
