import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, { stiffness: 450, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 450, damping: 28 });

  const ringX = useSpring(0, { stiffness: 250, damping: 24 });
  const ringY = useSpring(0, { stiffness: 250, damping: 24 });

  useEffect(() => {
    // Only enable on fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, [data-cursor], input, select');
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, ringX, ringY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-element pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isHovered ? 0 : 0.9,
        }}
      />

      {/* Smooth outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-saffron/60 backdrop-blur-[1px]"
        animate={{
          width: isHovered ? (cursorText ? 72 : 44) : 26,
          height: isHovered ? (cursorText ? 72 : 44) : 26,
          backgroundColor: isHovered ? 'rgba(217, 83, 30, 0.15)' : 'rgba(217, 83, 30, 0.04)',
          borderColor: isHovered ? 'rgba(217, 83, 30, 0.8)' : 'rgba(217, 83, 30, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        style={{
          x: ringX,
          y: ringY,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-wider text-saffron uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
