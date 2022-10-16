import { StyledLink, AppBarWrap } from './AppBar.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBarWrap>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">My Contacts</StyledLink>}
    </AppBarWrap>
  );
}
