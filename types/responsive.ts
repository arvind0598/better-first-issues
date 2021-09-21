export type ScreenSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type ScreenWidth = 600 | 900 | 1200 | 2000;

export type ResponsiveContext = {
  size: ScreenSize;
  isMobile: boolean;
  isTablet: boolean;
};
