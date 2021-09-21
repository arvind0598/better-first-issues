import { Box } from 'grommet';
import Masonry from 'react-masonry-css';
import { RepositorySearchData } from '../../types/repository-search';
import { ScreenWidth } from '../../types/responsive';
import RepositoryCard from '../repository/repository';
import styles from './viewer.module.scss';

type Props = RepositorySearchData;

type MasonryBreakpoints = Record<ScreenWidth, number> & { default: number};

const masonryBreakpoints: MasonryBreakpoints = {
  600: 1,
  900: 2,
  1200: 3,
  2000: 4,
  default: 5,
};

const Viewer = ({ data }: Props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderCards = () => data.map((repo) => <RepositoryCard {...repo} key={repo.fullName} />);

  return (
    <Box fill pad="large">
      <Masonry breakpointCols={masonryBreakpoints} className={styles.masonry}>
        {renderCards()}
      </Masonry>
    </Box>
  );
};

export default Viewer;
