import { Box } from 'components/Box';
import { Title } from './Home.styled';
import { PhoneIcon } from './Home.styled';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box display="flex" justifyContent="center" pt="40px">
      <Box width="900px" backgroundColor="#ffffff" p="20px 40px" borderRadius="20px">
        <Title>
          {!isLoggedIn
            ? 'Hi, to create a list of your contacts you need to register on the site'
            : 'You are registered on our site and can add new contacts'}
          <PhoneIcon />
        </Title>
      </Box>
    </Box>
  );
}
