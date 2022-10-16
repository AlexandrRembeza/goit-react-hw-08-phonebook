import { Box } from 'components/Box';
import { UserName, UserLogo, LogOutBtn } from './UserMenu.styled';
import { logOut } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { IoPersonSharp } from 'react-icons/io5';

export function UserMenu({ name }) {
  const dispatch = useDispatch();
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" mr="30px">
        <UserLogo>
          <IoPersonSharp size={45} />
        </UserLogo>
        <UserName>Welcome, {name}</UserName>
      </Box>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogOutBtn>
    </Box>
  );
}
