import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Grommet } from 'grommet';
import theme from '../utils/grommet-theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  );
}
export default MyApp
