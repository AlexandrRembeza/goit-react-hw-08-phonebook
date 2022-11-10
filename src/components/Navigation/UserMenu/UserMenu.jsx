import { Box } from 'components/Box';
import { UserName, UserLogo, LogOutBtn } from './UserMenu.styled';
import { logOut } from 'redux/auth/authOperations';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { ContactsSpinner } from 'components/ContactsPage/ContactsSpinner';

import { useDispatch, useSelector } from 'react-redux';
import { IoPersonSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

export function UserMenu({ name }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" mr="30px">
        <UserLogo>
          <IoPersonSharp size={45} />
        </UserLogo>
        <UserName>Welcome, {name}</UserName>
      </Box>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())} isLoading={isLoading}>
        {!isLoading ? 'Log out' : <ContactsSpinner size={40} color={'#ffffff'} />}
      </LogOutBtn>
    </Box>
  );
}

UserMenu.propTypes = {
  name: PropTypes.string.isRequired,
};
