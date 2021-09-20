import {
  Button,
  Container,
  Textarea,
  useToast,
  VStack,
  HStack,
  Alert,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { PageHeader, MessageSelect, MessageInput } from '../components';
import api from '../services/api';
import { messageSchema, timerMask } from '../utils';

const blankMessage = {
  trigger: '',
  channel: '',
  timer: '',
  message: '',
};

const NewMessagePage = () => {
  const triggers = useSelector(state => state.triggers);
  const channels = useSelector(state => state.channels);
  const toast = useToast();

  const [newMessage, setNewMessage] = useState(blankMessage);
  const [messageErrors, setMessageErrors] = useState([]);

  async function handleOnSubmit(evt) {
    evt.preventDefault();

    messageSchema
      .validate({ ...newMessage }, { abortEarly: false })
      .then(addMessageApi)
      .catch(validateForm);
  }

  function addMessageApi() {
    api
      .post('/messages', newMessage, {
        'Content-Type': 'application/json',
      })
      .then(resp => {
        if (resp.status === 201) {
          toast({
            title: 'Sucesso!',
            description: 'Mensagem Cadastrada!!',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'bottom-right',
            variant: 'left-accent',
          });
          setNewMessage(blankMessage);
          setMessageErrors([]);
        }
      })
      .catch(console.log);
  }

  function validateForm(err) {
    const errors = err.inner.reduce((acc, current) => {
      return [...acc, current];
    }, []);
    setMessageErrors(errors);
  }

  function handleChange(evt) {
    const name = evt.target.name;
    let value = evt.target.value;
    if (name === 'timer') {
      value = timerMask(value);
    }
    setNewMessage({ ...newMessage, [name]: value });
  }

  function removeMessageError(errIndex) {
    const errors = messageErrors.filter((item, index) => index !== errIndex);
    setMessageErrors(errors);
  }

  return (
    <Container
      display="flex"
      flexDirection="column"
      maxW={['98%', '98%', '98%', '75%']}
      py="4"
      my="4"
    >
      <PageHeader
        title="Nova Mensagem"
        actionTitle="Voltar"
        redirectTo="/messages"
      />
      <form onSubmit={handleOnSubmit}>
        <HStack my="6">
          <MessageSelect
            optionsList={triggers}
            selectId="trigger"
            selectName="trigger"
            labelText="Gatilho"
            onSelectChange={handleChange}
            value={newMessage.trigger}
            required={true}
          />
          <MessageSelect
            optionsList={channels}
            selectId="channel"
            selectName="channel"
            labelText="Canal"
            onSelectChange={handleChange}
            value={newMessage.channel}
            required={true}
          />
          <MessageInput
            inputName="timer"
            inputId="timer"
            labelText="Timer"
            placeholder="00:00"
            onInputChange={handleChange}
            value={newMessage.timer}
            required={true}
          />
        </HStack>
        <VStack spacing="4" alignItems="stretch">
          <Textarea
            name="message"
            id="message"
            placeholder="Insira a mensagem"
            bg="white"
            resize="none"
            rows="4"
            required
            onChange={handleChange}
            value={newMessage.message}
          />
          <Button type="submit" colorScheme="blue">
            Cadastrar
          </Button>
        </VStack>
      </form>
      {messageErrors.length > 0 &&
        messageErrors.map((error, index) => {
          return (
            <Alert key={index} status="error" my="2" borderRadius="6">
              <AlertIcon />
              {`[${error.path}] : ${error.message}`}
              <CloseButton
                position="absolute"
                right="2"
                top="2"
                onClick={() => removeMessageError(index)}
              />
            </Alert>
          );
        })}
    </Container>
  );
};

export default NewMessagePage;
