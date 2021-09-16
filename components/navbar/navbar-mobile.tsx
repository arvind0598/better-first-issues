import { FC, MouseEventHandler } from "react";
import { useRouter } from 'next/router'
import { Anchor, Box, Nav } from "grommet";
import useResponsiveContext from "../../hooks/use-responsive-context";
import { AppsRounded, CircleInformation, Icon, Search } from "grommet-icons";

import styles from './navbar.module.scss';

type NavbarIconProps = {
  icon: JSX.Element;
  href: string;
};

const MobileNavbar: FC<{}> = () => {
  const { isMobile } = useResponsiveContext();
  const buttonLabel = isMobile ? "" : "Start Here";
  const headingLevel = isMobile ? "1" : "2";
  const router = useRouter();

  const followLink = (href: string) => router.push(href, undefined, { shallow: true });

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
}

export default MobileNavbar;