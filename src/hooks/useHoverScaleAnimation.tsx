import { useState, useRef } from 'react';

export const useHoverScaleAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);

    if (!isAnimating) {
      setIsAnimating(true);

      timeoutRef.current = window.setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return {
    isScaled: isAnimating || isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };
};
