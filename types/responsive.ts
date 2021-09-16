export type ScreenSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type ResponsiveContext = {
  size: ScreenSize;
  isMobile: boolean;
  isTablet: boolean;
};