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

/**
 * This object determines how to split the screen between the "image" and the "text"
 * for various screen sizes.
 *
 * @example
 * On a large (l) screen, the image would take 1/3 of the screen width, and the text
 * would occupy 2/3 of the screen.
 */
const columnsLayout: Record<string, string[]> = {
  xs: ['1'],
  s: ['1'],
  m: ['1/2', '1/2'],
  l: ['1/3', '2/3'],
  xl: ['1/2', '1/2'],
};

/**
 * This set of Props just wants to know if we're rendering it on mobile.
 */
type BottomStickingNavbarProps = {
  isMobile: boolean;
};

/**
 * @summary Component to conditionally render the navbar at the bottom of the page.
 *
 * @description
 * We return nothing if we're not on mobile. Otherwise, we add an empty box right before
 * the navbar. The reason we do this is to ensure that the "fixed" navbar does not just
 * straight up overlap over the text content.
 *
 * @param {BottomStickingNavbarProps} props props
 * @returns the component.
 */
const BottomStickingNavbar: FC<BottomStickingNavbarProps> = ({ isMobile }) => {
  if (!isMobile) return null;
  return (
    <>
      <Box pad="large" />
      <MobileNavbar />
    </>
  );
};

/**
 * @summary Component to render the "About" Page.
 *
 * @description
 * Shows an image and a short description about the project. Renders slightly
 * differently on different screen sizes.
 *
 * @returns the component.
 */
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

  /**
   * @summary Component to render a paragraph.
   *
   * @description
   * The reason this exists within the About Component is that we want to use
   * some of the props without having to pass it manually each time. The text itself
   * is pretty straightforward.
   *
   * It uses "Empty" because there's an eslint rule that cries about stuff if we just
   * use "{}" because we end up using the children parameter anyway.
   *
   * @todo
   * As part of a larger revamp, we should move away from using FC. This is considered
   * to be an antipattern. Explicitly passing children makes more sense.
   *
   * @param {Empty} props props
   * @returns the component.
   */
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

  return (
    <>
      <PageHead title="First Issues | About" />
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
                <Anchor label="Good First Issues" href="http://goodfirstissues.com/" />
                , a similar project by Daren Sin.
              </AboutParagraph>
            </Box>
          </Grid>
        </Box>
      </Box>
      <BottomStickingNavbar isMobile={isMobile} />
    </>
  );
};

export default About;
