import {
  Box, Heading, Paragraph, Text,
} from 'grommet';
import { Star, Network, Icon } from 'grommet-icons';
import { AlignSelfType } from 'grommet/utils';
import { Repository } from '../../types/repository-search';
import classes from './repository.module.scss';

type Props = Repository;

type BadgeProps = {
  // eslint-disable-next-line react/require-default-props
  BadgeIcon?: Icon;
  text: string | number | null;
  // eslint-disable-next-line react/require-default-props
  align?: AlignSelfType;
};

const Badge = ({ BadgeIcon, text, align }: BadgeProps): JSX.Element => {
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
