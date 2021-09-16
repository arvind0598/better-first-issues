import { Box, Button, TextInput } from "grommet";
import { Search } from "grommet-icons";
import { MarginType } from "grommet/utils";
import { useState } from "react";
import useResponsiveContext from "../../hooks/use-responsive-context";

const SearchForm = () => {
  const { isMobile, isTablet } = useResponsiveContext();
  const isSmaller = isMobile || isTablet;

  const elementWidth = {
    textInput: isMobile ? "100%" : "50%",
    button: isMobile ? "80%" : "20%",
  };

  const [data, setData] = useState<string>();

  return (
    <Box direction="column" pad={{ vertical: "large" }} justify="center" align="center">
      <Box width={elementWidth.textInput} margin={{ vertical: "medium" }}>
        <TextInput
          size="large"
          focusIndicator={false}
          icon={<Search />}
          style={{background: "#FAFAFA"}}
          placeholder={!isMobile && "Search for a tag or an issue"}
        />
      </Box>
      <Button
        label="Search"
        size="large"
        primary
        style={{ width: elementWidth.button }}
      />
    </Box >
  );
}

export default SearchForm;