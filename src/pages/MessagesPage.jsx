import { Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MessagesTable, MessageFields, PageHeader } from '../components';
import api from '../services/api';

const MessagesPage = () => {
  const triggers = useSelector(state => state.triggers);
  const channels = useSelector(state => state.channels);
  const messages = useSelector(state => state.messages.allData);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({});

  useEffect(() => {
    async function search() {
      const query = Object.entries(filters).join('&').replaceAll(',', '=');
      const filteredMessages = await api(`/messages?${query}`);
      dispatch({ type: 'LOAD_MESSAGES', payload: filteredMessages.data });
    }
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  function handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    if (evt.target.type === 'text') {
      handleTimerChange(name, value);
    } else {
      handleSelectChange(name, value);
    }
  }

  function handleSelectChange(name, value) {
    if (!value) {
      const filtersClone = { ...filters };
      delete filtersClone[name];
      setFilters({ ...filtersClone });
    } else {
      setFilters({ ...filters, [name]: value });
    }
  }

  function handleTimerChange(name, value) {
    if (value.length >= 5) {
      setFilters({ ...filters, [name]: value });
    } else if (value.length <= 0) {
      const filtersClone = { ...filters };
      delete filtersClone[name];
      setFilters({ ...filtersClone });
    }
  }

  return (
    <Container maxW={['98%', '98%', '98%', '75%']} py="4" my="4">
      <PageHeader
        title="Lista de Mensagens"
        actionTitle="Cadastrar"
        redirectTo="/new/message"
      />
      <MessageFields
        triggersList={triggers}
        channelsList={channels}
        onAnyInputChange={handleChange}
      />
      <MessagesTable data={messages} />
    </Container>
  );
};

export default MessagesPage;
