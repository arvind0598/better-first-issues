import { Box } from 'grommet';
import Masonry from 'react-masonry-css';
import { RepositorySearchData } from '../../types/repository-search';
import { ScreenWidth } from '../../types/responsive';
import RepositoryCard from '../repository/repository';
import styles from './viewer.module.scss';

/**
 * The Viewer Props accepts the RepositorySearchData Type directly as props.
 * Refer to the type to see what it contains.
 *
 * @see "repository-search.ts"
 */
type Props = RepositorySearchData;

/**
 * So this exists to make sure that we enforce the breakpoints to be similar
 * throughout the codebase. Kinda hacky, but works.
 */
type MasonryBreakpoints = Record<ScreenWidth, number> & { default: number };

/**
 * Implementing breakpoints. This is a for width in pixels and determines the
 * number of columns that the layout will have under a given width.
 */
const masonryBreakpoints: MasonryBreakpoints = {
  600: 1,
  900: 2,
  1200: 3,
  2000: 4,
  default: 5,
};

/**
 * @summary Parent component that displays search results.
 *
 * @description
 * This is currently extremely useless. Once we add filters and sorting
 * options, this component will start making way more sense. As it is right now,
 * it just serves as a very fancy for-loop.
 *
 * @param {Props} props props
 * @returns the component.
 */
const Viewer = ({ data }: Props) => {
  /**
   * @summary This function really should not need documentation
   *
   * @returns an array of cards to render.
   */
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
