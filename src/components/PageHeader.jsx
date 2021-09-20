import { Flex, Heading, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const PageHeader = ({ title, actionTitle, redirectTo }) => {
  const history = useHistory();

  function handleRedirect() {
    if (redirectTo) {
      history.push(redirectTo);
    }
  }
  return (
    <Flex justifyContent="space-between">
      <Heading size="lg" variant="h3">
        {title}
      </Heading>
      <Button colorScheme="teal" onClick={handleRedirect}>
        {actionTitle}
      </Button>
    </Flex>
  );
};

export default PageHeader;
