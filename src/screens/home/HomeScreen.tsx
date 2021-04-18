import { Box } from '@chakra-ui/react';
// import { useEffect } from 'react';
import { useQuery } from 'react-query';

function HomeScreen() {
  const data = useQuery({
    queryKey: 'homeData',
    queryFn: () => fetch(
      '/id/portaljson',
    ).then((res) => res.json()),
  });
  console.log(data.data.result);

  return (
    <Box>
      home
    </Box>
  );
}

export default HomeScreen;
