import { Box } from 'components/Box';
import { StyledLink } from './AppBar.styled';

export function AppBar() {
  return (
    <Box>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/contacts">My Contacts</StyledLink>
    </Box>
  );
}
