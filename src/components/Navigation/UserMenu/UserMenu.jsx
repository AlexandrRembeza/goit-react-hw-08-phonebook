import { Box } from 'components/Box';
import { UserName, UserLogo, LogOutBtn } from './UserMenu.styled';

import { IoPersonSharp } from 'react-icons/io5';

export function UserMenu() {
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <UserLogo>
          <IoPersonSharp size={45} />
        </UserLogo>
        <UserName>Welcome, James</UserName>
      </Box>
      <LogOutBtn type="button">Log out</LogOutBtn>
    </Box>
  );
}
