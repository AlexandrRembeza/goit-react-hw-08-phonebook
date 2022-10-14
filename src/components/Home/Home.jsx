import { Box } from 'components/Box';
import { Title } from './Home.styled';
import { PhoneIcon } from './Home.styled';

export function Home() {
  return (
    <Box display="flex" justifyContent="center" pt="40px">
      <Box width="900px" backgroundColor="#ffffff" p="20px 40px" borderRadius="20px">
        <Title>
          Hi, to create a list of your contacts you need to register on the site
          <PhoneIcon />
        </Title>
      </Box>
    </Box>
  );
}
