import { FC } from 'react';
import { useRouter } from 'next/router';
import {
  Anchor, Box, Header, Heading,
} from 'grommet';
import useResponsiveContext from '@/hooks/use-responsive-context';

type NavbarAnchorProps = {
  /**
   * The label that will be rendered as the link on the navbar.
   */
  label: string;

  /**
   * The URL that will be passed as the HREF for the anchor tag.
   */
  href: string;
};

/**
 * @summary Component to render the Desktop Navbar.
 *
 * @description
 * This component is used to show the text links on the top of the screen. It
 * accepts no props, instead resorting to the responsive context to make sure that
 * everything is sized and aligned appropriately.
 *
 * @returns the component.
 */
const Navbar: FC<{}> = () => {
  const { isMobile } = useResponsiveContext();
  const headingLevel = isMobile ? '1' : '2';
  const textAlign = isMobile ? 'center' : 'start';
  const router = useRouter();

  /**
   * @see "navbar-mobile.tsx"
   *
   * @todo
   * This function exists in both the navbars. While its minimum code duplication,
   * we could look at moving this to a hook of its own to abstract away some code.
   *
   * @param {string} href The relative URL to direct to.
   * @returns a promise to do so
   */
  const followLink = (href: string) => router.push(href, undefined, { shallow: true });

  /**
   * @summary Component to render individual label on the desktop Navbar.
   *
   * @description
   * This component exists to abstract away common props like the margin and the onClick.

   * @param {NavbarAnchorProps} props props
   * @returns the component.
   */
  const NavbarAnchor: FC<NavbarAnchorProps> = ({ label, href }) => (
    <Anchor
      label={label}
      onClick={() => followLink(href)}
      margin={{ horizontal: 'medium' }}
    />
  );

  /**
   * @summary This function conditionally renders the links in the navbar on a desktop.
   *
   * @description
   * We return nothing if we're on a mobile device, otherwise we return the standard navbar.
   *
   * @returns null, or the navbar, depending on the device.
   */
  const renderDesktopLinks = (): React.ReactNode | null => {
    if (isMobile) return null;
    return (
      <Box flex direction="row" justify="end" align="center">
        <NavbarAnchor label="Random" href="#" />
        <NavbarAnchor label="About" href="/about" />
      </Box>
    );
  };

  return (
    <Header pad="medium" justify="evenly" direction="row">
      <Box flex>
        <Heading
          level={headingLevel}
          textAlign={textAlign}
          onClick={() => followLink('/')}
          style={{ cursor: 'pointer' }}
        >
          Better First Issues
        </Heading>
      </Box>
      {
        renderDesktopLinks()
      }
    </Header>
  );
};

export default Navbar;
