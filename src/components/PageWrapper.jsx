import { Box } from '@chakra-ui/layout';

const PageWrapper = ({ children }) => {
  return (
    <Box
      minH="100vh"
      maxH="100vh"
      overflow="hidden"
      d="flex"
      flexDirection="row"
      bg="#EEEEEE"
    >
      {children}
    </Box>
  );
};
export default PageWrapper;
