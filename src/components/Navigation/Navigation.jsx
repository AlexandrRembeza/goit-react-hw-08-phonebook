import { AppBar } from './AppBar';
import { Box } from 'components/Box';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="30px 70px"
      backgroundImage="linear-gradient(
      to left,
      rgb(118, 159, 255) 15%,
      rgb(192, 213, 254) 40%,
      rgb(176, 195, 249) 65%,
      rgb(109, 167, 255)
    )"
      as="header"
    >
      <AppBar />
      {isLoggedIn ? <UserMenu name={name} /> : <AuthNav />}
    </Box>
  );
}
