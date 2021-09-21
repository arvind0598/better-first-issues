import { Box, Button, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import { useState } from 'react';
import useResponsiveContext from '../../hooks/use-responsive-context';

type Props = {
  updateSearchTerm: (term: string) => void;
};

const SearchForm = ({ updateSearchTerm }: Props) => {
  const { isMobile, isTablet } = useResponsiveContext();
  const [searchTerm, setSearchTerm] = useState('');
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
          placeholder={!isMobile && 'Search for an issue or a repository'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Button
        label="Search"
        size="large"
        primary
        style={{ width: elementWidth.button }}
        onClick={() => updateSearchTerm(searchTerm)}
      />
    </Box>
  );
};

export default SearchForm;
