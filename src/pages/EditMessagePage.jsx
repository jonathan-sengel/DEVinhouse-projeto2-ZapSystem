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
import { useHistory } from 'react-router-dom';
import { PageHeader, MessageSelect, MessageInput } from '../components';
import api from '../services/api';
import { messageSchema, timerMask } from '../utils';

const EditMessagePage = props => {
  const triggers = useSelector(state => state.triggers);
  const channels = useSelector(state => state.channels);
  const history = useHistory();
  const message = useSelector(state => state.messages);
  const toast = useToast();

  const [editMessage, setEditMessage] = useState(message.editingData);
  const [messageErrors, setMessageErrors] = useState([]);

  async function handleOnSubmit(evt) {
    evt.preventDefault();
    messageSchema
      .validate({ ...editMessage }, { abortEarly: false })
      .then(editMessageApi)
      .catch(validateForm);
  }

  function editMessageApi() {
    api
      .put(`/messages/${editMessage.id}`, editMessage, {
        'Content-Type': 'application/json',
      })
      .then(resp => {
        if (resp.status === 200) {
          toast({
            title: 'Sucesso!',
            description: 'Mensagem Editada!',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'bottom-right',
            variant: 'left-accent',
          });
          history.push('/messages');
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

  function removeMessageError(errIndex) {
    const errors = messageErrors.filter((item, index) => index !== errIndex);
    setMessageErrors(errors);
  }

  function handleChange(evt) {
    const name = evt.target.name;
    let value = evt.target.value;
    if (name === 'timer') {
      value = timerMask(value);
    }
    setEditMessage({ ...editMessage, [name]: value });
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
        title="Editando Mensagem"
        actionTitle="Voltar"
        redirectTo="/messages"
      />
      <form onSubmit={handleOnSubmit}>
        <MessageInput
          inputName="id"
          inputId="id"
          labelText="Id Mensagem"
          onInputChange={handleChange}
          value={editMessage.id}
          required={true}
          disabled
        />
        <HStack my="6">
          <MessageSelect
            optionsList={triggers}
            selectId="trigger"
            selectName="trigger"
            labelText="Gatilho"
            onSelectChange={handleChange}
            value={editMessage.trigger}
            required={true}
          />
          <MessageSelect
            optionsList={channels}
            selectId="channel"
            selectName="channel"
            labelText="Canal"
            onSelectChange={handleChange}
            value={editMessage.channel}
            required={true}
          />
          <MessageInput
            inputName="timer"
            inputId="timer"
            labelText="Timer"
            placeholder="00:00"
            onInputChange={handleChange}
            value={editMessage.timer}
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
            value={editMessage.message}
          />
          <Button type="submit" colorScheme="orange">
            Salvar
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

export default EditMessagePage;
