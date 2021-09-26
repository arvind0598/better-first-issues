/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Grommet } from 'grommet';
import theme from '../utils/grommet-theme';

/**
 * @summary This is a wrapper around the entire app.
 *
 * @description
 * Note that this is where we use Grommet to wrap the entire thing
 * in a single theme.
 *
 * @param {AppProps} props props
 * @returns the application.
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  );
}
export default MyApp;
