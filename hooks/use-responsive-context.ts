import { useEffect, useState } from 'react';
import { ScreenSize, ResponsiveContext } from '@/types/responsive';

/**
 * @summary This function returns a string requivalent for a given screen width in pixels.
 *
 * @description
 * This function returns a ScreenSize, which is a 1-2 letter acronym for the pixel equivalent
 * of a sreen width.
 *
 * @param {number} width the width of the screen
 * @returns the text equivalent of the width.
 */
const getSizeForWidth = (width: number): ScreenSize => {
  if (width <= 600) return 'xs';
  if (width <= 900) return 's';
  if (width <= 1200) return 'm';
  if (width <= 2000) return 'l';
  return 'xl';
};

/**
 * @summary This function creates a hook to get details about the current screen width.
 *
 * @description
 * This hook internally uses the getSizeForWidth to get the text-equivalent of the screen
 * width. It also adds an event listener on the first load, so that it makes sure we always
 * have the latest screen width at all times.
 *
 * @returns a hook to get the latest screen size.
 */
const useResponsiveContext = () => {
  const [responsive, setResponsive] = useState<ResponsiveContext>({ size: 'l', isMobile: false, isTablet: false });

  /**
   * @summary This function handles updating the local state with the latest screen size.
   *
   * @description
   * This function is used as an event handler to handle screen resize. It uses getSizeForWidth
   * to get the text equivalent and some nice utility variables from it.
   */
  const handleResize = () => {
    const size = getSizeForWidth(window.innerWidth);
    const isMobile = size === 'xs';
    const isTablet = size === 's' || size === 'm';
    setResponsive({ size, isMobile, isTablet });
  };

  /**
   * @summary This statement handles the addition and removal for the resize event listener.
   *
   * @description
   * We pass a [] to ensure that this only runs once. This ensures that we add the event
   * listener once this starts up, and we then run the handleResize function once manually.
   * Once that's done, we go ahead and remove it during "deconstruction", using the return
   * statement.
   */
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return responsive;
};

export default useResponsiveContext;
