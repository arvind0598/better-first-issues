import type { NextPage } from 'next';
import {
  Anchor, Box, Grid, Heading, Image, Paragraph,
} from 'grommet';
import { FC } from 'react';
import PageHead from '../components/head/head';
import Navbar from '../components/navbar/navbar';
import useResponsiveContext from '../hooks/use-responsive-context';
import MobileNavbar from '../components/navbar/navbar-mobile';
import { Empty } from '../types/utils';

const columnsLayout: Record<string, string[]> = {
  xs: ['1'],
  s: ['1'],
  m: ['1/2', '1/2'],
  l: ['1/3', '2/3'],
  xl: ['1/2', '1/2'],
};

const About: NextPage = () => {
  const { size, isMobile, isTablet } = useResponsiveContext();
  const isSmaller = isMobile || isTablet;

  const flexDirection = isSmaller ? 'column' : 'row';
  const textAlign = isSmaller ? 'center' : 'start';

  const paddingSize = isSmaller ? 'small' : 'xlarge';
  const containerPadding = {
    horizontal: paddingSize,
  };
  const boxPadding = {
    ...containerPadding,
    vertical: 'xsmall',
  };

  const AboutParagraph: FC<Empty> = ({ children }) => {
    const fontSize = size === 'xl' ? 'xlarge' : 'large';
    return (
      <Box pad={boxPadding}>
        <Paragraph fill size={fontSize} textAlign={textAlign}>
          {children}
        </Paragraph>
      </Box>
    );
  };

  const BottomStickingNavbar: FC<{}> = () => {
    if (!isMobile) return null;
    return (
      <>
        <Box pad="large" />
        <MobileNavbar />
      </>
    );
  };

  return (
    <>
      <PageHead title="First Issues" />
      <Navbar />
      <Box align="center" justify="center" direction="column" pad="large">
        {
          !isSmaller && <Heading level="1" textAlign={textAlign}>get on with open-source</Heading>
        }
        <Box align="center" justify="center" direction={flexDirection} pad={boxPadding}>
          <Grid fill columns={columnsLayout[size]} gap="small">
            <Box fill pad="large">
              <Image fill src="developer_activity_brown_light.svg" alt="image of a developer" />
            </Box>
            <Box>
              <AboutParagraph>
                Better First Issues targets developers who want to contribute to open-source
                software but do not know where or how to start.Github does provide its own
                advanced search, but I have always found it too convoluted to use.
              </AboutParagraph>
              <AboutParagraph>
                By providing developers with filters, this website empowers them to browse and
                select issues and repositories based on programming languages that they are
                comfortable with. In addition, they can choose the type of issues they want
                to address.
              </AboutParagraph>
              <AboutParagraph>
                This project is inspired by
                {' '}
                <Anchor label="Good First Issues" href="http://goodfirstissues.com/" />
                , a similar project by Daren Sin.
              </AboutParagraph>
            </Box>
          </Grid>
        </Box>
      </Box>
      <BottomStickingNavbar />
    </>
  );
};

export default About;
