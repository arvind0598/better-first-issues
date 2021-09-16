import { Box, Button, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import useResponsiveContext from '../../hooks/use-responsive-context';

const SearchForm = () => {
  const { isMobile, isTablet } = useResponsiveContext();
  const isSmaller = isMobile || isTablet;

  const elementWidth = {
    textInput: isSmaller ? '100%' : '50%',
    button: isSmaller ? '80%' : '20%',
  };

  return (
    <Box direction="column" pad={{ vertical: 'large' }} justify="center" align="center">
      <Box width={elementWidth.textInput} margin={{ vertical: 'medium' }}>
        <TextInput
          size="large"
          focusIndicator={false}
          icon={<Search />}
          style={{ background: '#FAFAFA' }}
          placeholder={!isMobile && 'Search for a tag or an issue'}
        />
      </Box>
      <Button
        label="Search"
        size="large"
        primary
        style={{ width: elementWidth.button }}
      />
    </Box>
  );
};

export default SearchForm;
