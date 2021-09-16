import { Box } from 'grommet';
import type { NextPage } from 'next'
import PageHead from '../components/head/head'
import Navbar from '../components/navbar/navbar'
import SearchForm from '../components/search/search';
import useResponsiveContext from '../hooks/use-responsive-context';
import MobileNavbar from '../components/navbar/navbar-mobile';

const Home: NextPage = () => {
  const { isMobile } = useResponsiveContext();
  return (
    <>
      <PageHead title="First Issues" />
      <Navbar />
      <Box flex pad="large" margin="large">
        <SearchForm />
      </Box>
      {
        isMobile && <MobileNavbar />
      }
    </>
  );
}

export default Home;
