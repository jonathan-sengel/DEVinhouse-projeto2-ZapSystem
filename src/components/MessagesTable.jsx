import { InfoIcon } from '@chakra-ui/icons';
import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';

import scrollbarStyle from '../themes/scrollbarCss';
import { MessageModal } from '.';
import { useState } from 'react';

const MessagesTable = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [messageToModal, setMessageToModal] = useState({});

  function handleOpenModal(messageData) {
    setMessageToModal(messageData);
    onOpen();
  }

  return (
    <Box
      border="1px"
      maxH="calc(100vh - 270px)"
      overflowY="scroll"
      borderColor="gray.300"
      borderRadius="4"
      p="4"
      css={scrollbarStyle}
    >
      <Table variant="striped" colorScheme="blackAlpha" size="sm">
        <TableCaption>
          {data.length > 0
            ? `Total de mensagens: ${data.length}`
            : `Nenhum resultado...`}
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Gatilho</Th>
            <Th>Canal</Th>
            <Th>Timer</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map(({ id, channel, trigger, timer, message }) => {
            return (
              <Tr key={id}>
                <Td>{trigger}</Td>
                <Td>{channel}</Td>
                <Td>{timer}</Td>
                <Td>
                  <IconButton
                    aria-label="Ver mensagem"
                    icon={<InfoIcon />}
                    colorScheme="blue"
                    size="sm"
                    onClick={() => {
                      handleOpenModal({ id, channel, trigger, timer, message });
                    }}
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <MessageModal modalOnClose={onClose} modalIsOpen={isOpen}>
        {messageToModal}
      </MessageModal>
    </Box>
  );
};

export default MessagesTable;
