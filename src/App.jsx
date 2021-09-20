import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import api from './services/api';

import { myTheme } from './themes/myTheme';
import Routes from './routes';

function App() {
  const dispatch = useDispatch();
  const [triggers, setTriggers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const msgs = await api.get('/messages');
      setMessages(msgs.data);
      const chann = await api.get('/triggers');
      setTriggers(chann.data);
      const trigg = await api.get('/channels');
      setChannels(trigg.data);
      setIsLoading(false);
    }
    loadData();
  }, []);
  useEffect(() => {
    dispatch({
      type: 'LOAD_MESSAGES',
      payload: messages,
    });
    dispatch({
      type: 'LOAD_TRIGGERS',
      payload: triggers,
    });
    dispatch({
      type: 'LOAD_CHANNELS',
      payload: channels,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, channels, triggers]);

  return (
    <ChakraProvider theme={myTheme}>
      <BrowserRouter>
        <Routes isLoading={isLoading} />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
