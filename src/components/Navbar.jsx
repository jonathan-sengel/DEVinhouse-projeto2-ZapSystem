import { List, ListItem } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <List w="100%" textAlign="center">
      <ListItem
        p="3"
        transition="0.3s"
        _hover={{ bg: '#393E46', color: 'white', cursor: 'pointer' }}
        onClick={() => history.push('/dashboard')}
      >
        Dashboard
      </ListItem>
      <ListItem
        p="3"
        transition="0.3s"
        _hover={{ bg: '#393E46', color: 'white', cursor: 'pointer' }}
        onClick={() => history.push('/messages')}
      >
        Mensagens
      </ListItem>
      <ListItem
        p="3"
        transition="0.3s"
        _hover={{ bg: '#393E46', color: 'white', cursor: 'pointer' }}
        onClick={() => {
          dispatch({ type: 'LOGOUT', payload: false });
        }}
      >
        Logout
      </ListItem>
    </List>
  );
};

export default Navbar;
