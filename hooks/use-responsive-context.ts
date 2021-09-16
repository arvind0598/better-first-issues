import { useEffect, useState } from 'react';
import { ScreenSize, ResponsiveContext } from '../types/responsive';

const getSizeForWidth = (width: number): ScreenSize => {
  if (width <= 600) return 'xs';
  if (width <= 900) return 's';
  if (width <= 1200) return 'm';
  if (width <= 2000) return 'l';
  return 'xl';
};

const useResponsiveContext = () => {
  const [responsive, setResponsive] = useState<ResponsiveContext>({ size: 'l', isMobile: false, isTablet: false });

  const handleResize = () => {
    const size = getSizeForWidth(window.innerWidth);
    const isMobile = size === 'xs';
    const isTablet = size === 's' || size === 'm';
    setResponsive({ size, isMobile, isTablet });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return responsive;
};

export default useResponsiveContext;
