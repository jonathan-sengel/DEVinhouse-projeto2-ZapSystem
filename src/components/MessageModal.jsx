import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  useDisclosure,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const MessageModal = ({ modalIsOpen, modalOnClose, children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function handleDeleteMessage() {
    api
      .delete(`/messages/${children.id}`)
      .then(() => api.get('/messages'))
      .then(allMessages => {
        dispatch({ type: 'LOAD_MESSAGES', payload: allMessages.data });
        onClose();
        modalOnClose();
        toast({
          title: 'Sucesso!',
          description: `Mensagem id: ${children.id} excluida!`,
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'bottom-right',
          variant: 'left-accent',
        });
      })
      .catch(error => {
        onClose();
        modalOnClose();
        toast({
          title: 'Erro ao excluir',
          description: 'Por favor contacte o suporte!',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'bottom-right',
          variant: 'left-accent',
        });
      });
  }

  function handleEditMessage() {
    dispatch({ type: 'SET_EDIT_MESSAGE', payload: children });
    history.push('/edit/message');
  }

  return (
    <>
      <Modal
        isCentered
        onClose={modalOnClose}
        isOpen={modalIsOpen}
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalhes da Mensagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children.message}</ModalBody>
          <ModalFooter>
            <HStack spacing="2">
              <IconButton
                aria-label="Editar mensagem"
                icon={<EditIcon />}
                colorScheme="teal"
                size="sm"
                onClick={handleEditMessage}
              />
              <IconButton
                aria-label="Deletar mensagem"
                icon={<DeleteIcon />}
                colorScheme="red"
                size="sm"
                onClick={onOpen}
              />
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deseja realmente excluir?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button colorScheme="blue" px="2" py="1" mr={3} onClick={onClose}>
              Não
            </Button>
            <Button variant="ghost" px="2" py="1" onClick={handleDeleteMessage}>
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MessageModal;
