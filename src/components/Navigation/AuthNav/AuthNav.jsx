import { AuthNavWrap } from './AuthNav.style';
import { StyledLink } from '../AppBar/AppBar.styled';

export function AuthNav() {
  return (
    <AuthNavWrap>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </AuthNavWrap>
  );
}
