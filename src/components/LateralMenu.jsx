import { Box, Flex, Text } from '@chakra-ui/react';

import Navbar from './Navbar';

const LateralMenu = () => {
  return (
    <Flex
      as="header"
      direction="column"
      alignItems="center"
      boxShadow="2xl"
      borderRadius="md"
      minW="max-content"
      display={['none', 'none', 'none', 'flex']}
    >
      <Box w="100%" px="6" py="3" marginBottom="4" bg="#393E46" color="white">
        <Text fontSize="2xl">Zap System</Text>
      </Box>
      <Navbar />
    </Flex>
  );
};

export default LateralMenu;
