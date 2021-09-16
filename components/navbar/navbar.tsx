import { FC } from "react";
import { useRouter } from 'next/router'
import { Anchor, Box, Button, Header, Heading } from "grommet";
import { Github } from "grommet-icons";
import useResponsiveContext from "../../hooks/use-responsive-context";

const Navbar: FC<{}> = () => {
  const { isMobile } = useResponsiveContext();
  const buttonLabel = isMobile ? "" : "Start Here";
  const headingLevel = isMobile ? "1" : "2";
  const textAlign = isMobile ? "center" : "start"
  const router = useRouter();

  const followLink = (href: string) => router.push(href, undefined, { shallow: true });

  const renderDesktopLinks = (): React.ReactNode | null => {
    if (isMobile) return null;
    return (
      <Box flex direction="row" justify="end" align="center">
        <Anchor label="Random" onClick={() => { }} margin={{ horizontal: "medium" }} />
        <Anchor label="About" onClick={() => followLink('/about')} margin={{ horizontal: "medium" }} />
      </Box>
    );
  }

  return (
    <Header pad="medium" justify="evenly" direction="row" >
      <Box flex>
        <Heading level={headingLevel} textAlign={textAlign} onClick={() => followLink('/')} style={{ cursor: 'pointer' }}>Better First Issues</Heading>
      </Box>
      {
        renderDesktopLinks()
      }
    </Header>
  );
}

export default Navbar;