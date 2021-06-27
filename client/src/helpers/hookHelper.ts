import { useEffect } from 'react';
import config from '../configuration';

export const useKeyDownNav = (
  onArrowClick: (value: 'left' | 'right') => void
) => {
  useEffect(() => {
    if (config.FEATURES && config.FEATURES.keydownNavEnabled){
      const handleKeyDown = (event: any) => {
        if (event.keyCode === 39) {
          onArrowClick('right');
        }
        if (event.keyCode === 37) {
          onArrowClick('left');
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [onArrowClick]);
};
