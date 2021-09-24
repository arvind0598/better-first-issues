/* eslint-disable react/require-default-props */
import {
  Box, Heading, Paragraph, Text,
} from 'grommet';
import { Star, Network, Icon } from 'grommet-icons';
import { AlignSelfType } from 'grommet/utils';
import { Repository } from '../../types/repository-search';
import classes from './repository.module.scss';

/**
 * The Repository Card Props accepts the Repository Type directly as props.
 * Refer to the type to see what it contains.
 *
 * @see "repository-search.ts"
 */
type Props = Repository;

type BadgeProps = {
  /**
   * The icon to be rendered on the badge.
   */
  BadgeIcon?: Icon;

  /**
   * The text to be displayed next to the badge.
   */
  text: string | number | null;

  /**
   * This is used to align the badge within the card that displays it.
   *
   * @todo
   * Get this to work. This currently does not make any difference.
   */
  align?: AlignSelfType;
};

/**
 * @summary Component to render badges on top of cards.
 *
 * @description
 * This shows some useful information, kind of like a notification. It is
 * currently used only within the Repository Card, but once the Issue component
 * is developed we can move this to its own directory.
 *
 * @param {BadgeProps} props props
 * @returns the component.
 */
const Badge = ({ BadgeIcon, text, align }: BadgeProps): JSX.Element => {
  /**
   * @summary This function accepts the ICON type and makes an element out of it.
   *
   * @description
   * BadgeIcon is of the Icon type, which is different from the JSX.Element type,
   * which is what we need to render the actual icon. We do that so that we can
   * pass our own props to it before rendering it.
   *
   * @returns a JSX.Element, but NULL if nothing is passed to it.
   */
  const renderedIcon = () => {
    if (!BadgeIcon) return null;
    return <BadgeIcon color="#FFFCF5" />;
  };

  return (
    <Box
      className={classes.badge}
      alignSelf={align}
      direction="row"
      background="brand"
      pad="xsmall"
      margin="xsmall"
      round
    >
      {
        renderedIcon()
      }
      <Text margin={{ horizontal: 'xsmall' }}>{text}</Text>
    </Box>
  );
};

/**
 * @summary Component to render an individual repository card.
 *
 * @description
 * This component accepts ALL the data related to a repository and then creates
 * a card that the user can interact with to get data related to it.
 *
 * @param {Props} props the repository object
 * @returns the component.
 */
const RepositoryCard = ({
  fullName,
  language,
  description,
  stars,
  forks,
}: Props) => (
  <Box pad="medium" background="light-2" margin="small" direction="column" className={classes.card}>
    <Box direction="row" justify="end">
      <Badge text={language} />
      <Badge BadgeIcon={Star} text={stars} />
      <Badge BadgeIcon={Network} text={forks} align="start" />
    </Box>
    <Box direction="row">
      {/* @ts-ignore */}
      <Heading level="3" style={{ wordWrap: 'anywhere' }}>
        {fullName}
      </Heading>
    </Box>

    <Box direction="row">
      <Paragraph>
        {description}
      </Paragraph>
    </Box>
  </Box>
);

export default RepositoryCard;
