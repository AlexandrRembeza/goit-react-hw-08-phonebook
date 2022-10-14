import { AppBar } from './AppBar';
import { Box } from 'components/Box';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';

export function Navigation() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="30px 50px"
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
      <AuthNav />
      <UserMenu />
    </Box>
  );
}
