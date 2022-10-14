import { Box } from 'components/Box';
import { StyledLink } from '../AppBar/AppBar.styled';

export function AuthNav() {
  return (
    <Box>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </Box>
  );
}
