import { Box, Button, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import { KeyboardEventHandler, useState } from 'react';
import useResponsiveContext from '@/hooks/use-responsive-context';

type Props = {
  /**
   * This is a function that is called when the search is triggered.
   */
  updateSearchTerm: (term: string) => void;
};

/**
 * @summary Component to render the Search Box and accept user input.
 *
 * @description
 * This component has a text box and a button, and that's the end of that story.
 * It renders sizes slightly differently based on the screen size. It also has internal
 * state to represent the text in the search input.
 *
 * @param {Props} props props
 * @returns the component.
 */
const SearchForm = ({ updateSearchTerm }: Props) => {
  const { isMobile, isTablet } = useResponsiveContext();
  const [searchTerm, setSearchTerm] = useState('');
  const isSmaller = isMobile || isTablet;

  const elementWidth = {
    textInput: isSmaller ? '100%' : '50%',
    button: isSmaller ? '80%' : '20%',
  };

  /**
   * @summary This function allows for submitting text on enter.
   *
   * @description
   * This function exists because there's no easy way to make the Box a Form, so
   * we need to manually allow this.
   *
   * @param e event
   */
  const submitForm: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      updateSearchTerm(searchTerm);
    }
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
          onKeyUp={submitForm}
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
