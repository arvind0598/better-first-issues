import { FC } from 'react';
import { useRouter } from 'next/router';
import { Anchor, Box, Nav } from 'grommet';
import {
  AppsRounded, CircleInformation, Search,
} from 'grommet-icons';

import styles from './navbar.module.scss';

type NavbarIconProps = {
  /**
   * The Grommet Icon that is to be rendered.
   *
   * @todo
   * We should consider using an Icon here instead of the element, just to allow for
   * consistency with how we use it within the badge of a repository card.
   */
  icon: JSX.Element;

  /**
   * The URL that will be passed as the HREF for the anchor tag.
   */
  href: string;
};

/**
 * @summary Component to render the Mobile Navbar with Icons on them.
 *
 * @description
 * This component is rendered conditionally on mobiles only. It shows up at the bottom
 * and contains icons to redirect to all of the other pages.
 *
 * @todo
 * Determine if lazy loading even matters in Next.
 *
 * @returns the component.
 */
const MobileNavbar: FC<{}> = () => {
  const router = useRouter();

  /**
   * @summary This function allows for shallow routing to a relative URL.
   *
   * @description
   * This is just a wrapper over the inbuilt router push to allow for shallow routing.
   *
   * @param {string} href The relative URL to direct to.
   * @returns a promise to do so
   */
  const followLink = (href: string) => router.push(href, undefined, { shallow: true });

  /**
   * @summary Component to render individual icons on the Mobile Navbar.
   *
   * @description
   * This component exists for the simple reason that I didn't want to pass the same props
   * over and over again for each Anchor. This is also why its not a different file and instead
   * sits inside another component.
   *
   * @param {NavbarIconProps} props props
   * @returns the component.
   */
  const NavbarIcon: FC<NavbarIconProps> = ({ icon, href }) => (
    <Anchor icon={icon} color="white" onClick={() => followLink(href)} />
  );

  return (
    <Box className={styles.navbar} width="100%">
      <Nav background="brand" justify="evenly" direction="row" width="100%" pad="medium">
        <NavbarIcon icon={<Search />} href="/" />
        <NavbarIcon icon={<AppsRounded />} href="/" />
        <NavbarIcon icon={<CircleInformation />} href="/about" />
      </Nav>
    </Box>
  );
};

export default MobileNavbar;
