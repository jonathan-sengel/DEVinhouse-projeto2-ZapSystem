import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogin() {
    if (login === 'teste@123.com' && pass === 'abc123') {
      dispatch({ type: 'LOGIN', payload: true });
      history.push('/dashboard');
      return;
    }
    setError('usuário: teste@123.com | senha: abc123');
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
      bgColor="#383D45"
    >
      <Box w="35%" minW="260px" p="8" borderRadius="8" bgColor="#EEEEEE">
        <Heading
          size="lg"
          variant="h1"
          marginBottom="4"
          color="teal"
          textAlign="center"
        >
          Login
        </Heading>
        <VStack spacing="2" marginBottom="4">
          <Input
            name="login"
            placeholder="teste@123.com"
            bg="white"
            value={login}
            onChange={evt => {
              setLogin(evt.target.value);
            }}
          />
          <Input
            name="pass"
            placeholder="abc123"
            bg="white"
            type="password"
            value={pass}
            onChange={evt => {
              setPass(evt.target.value);
            }}
          />
        </VStack>
        <HStack spacing="2" justifyContent="flex-end">
          <Button colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
          <Button
            colorScheme="blue"
            variant="ghost"
            disabled
            title="não disponivel ainda"
          >
            Cadastrar
          </Button>
        </HStack>
      </Box>
      {error && (
        <Alert w="35%" minW="260px" status="error" my="2" borderRadius="6">
          <AlertIcon />
          {error}
          <CloseButton
            position="absolute"
            right="2"
            top="2"
            onClick={() => setError('')}
          />
        </Alert>
      )}
    </Flex>
  );
};

export default LoginPage;
