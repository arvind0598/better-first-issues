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

const Home: NextPage = () => {
  const { isMobile } = useResponsiveContext();
  const [searchTerm, setSearchTerm] = useState('');
  const { isLoading, data } = useRepoData(searchTerm);

  const hijackUpdate = (term: string) => {
    setSearchTerm(term);
  };

  const renderViewer = () => {
    if (isLoading) {
      return <Box> Loading! </Box>;
    }

    if (!data.success || !data.data) {
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
        <SearchForm updateSearchTerm={(term) => hijackUpdate(term)} />
      </Box>
      <Box flex>
        {
          renderViewer()
        }
      </Box>
      {
        isMobile && <MobileNavbar />
      }
    </>
  );
};

export default Home;
