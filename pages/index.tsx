import { Box } from 'grommet';
import type { NextPage } from 'next';
import { useState } from 'react';
import PageHead from '../components/head/head';
import Navbar from '../components/navbar/navbar';
import SearchForm from '../components/search/search';
import useResponsiveContext from '../hooks/use-responsive-context';
import MobileNavbar from '../components/navbar/navbar-mobile';
import useRepoData from '../hooks/use-repo-data';
import Viewer from '../components/viewer/viewer';

/**
 * @summary Component to render the landing page.
 *
 * @description
 * Shows the search and view components. This internally connects to the useRepoData
 * hook, and actually connects to the backend from here. It conditionally renders the
 * Viewer component depending on the status of this hook.
 *
 * It also conditionally renders the navbar on mobile devices.
 *
 * @returns the component.
 */
const Home: NextPage = () => {
  const { isMobile } = useResponsiveContext();
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoading, data } = useRepoData(searchTerm);

  /**
   * @summary This function conditionally renders the loader, error or viewer components.
   *
   * @description
   * This function uses the useRepoData hook to figure out what the status of the response is.
   * Depending on the response, we either show the loader or the error components (both of which
   * don't exist - prompting us to use regular boxes instead). If everything is good we go for
   * rendering the Viewer component.
   *
   * @returns a component.
   */
  const renderViewer = () => {
    if (isLoading) {
      return <Box> Loading! </Box>;
    }

    if (!data?.success || !data?.data) {
      return <Box>Error!</Box>;
    }

    const { data: response } = data;
    return (
      <Viewer
        totalCount={response?.totalCount}
        incompleteResults={response?.incompleteResults}
        data={response.data}
      />
    );
  };

  return (
    <>
      <PageHead title="First Issues" />
      <Navbar />
      <Box flex pad="large" margin="large">
        <SearchForm updateSearchTerm={(term) => setSearchTerm(term)} />
      </Box>
      <Box flex>
        {
          searchTerm && renderViewer()
        }
      </Box>
      {
        isMobile && <MobileNavbar />
      }
    </>
  );
};

export default Home;
