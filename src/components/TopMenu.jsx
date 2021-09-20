import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const TopMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      px="6"
      py="2.5"
      boxShadow="2xl"
    >
      <Box visibility={['visible', 'visible', 'visible', 'hidden']}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="options"
            icon={<HamburgerIcon w="6" h="6" />}
          />
          <MenuList>
            <MenuItem
              onClick={() => {
                history.push('/dashboard');
              }}
            >
              Dashboard
            </MenuItem>
            <MenuItem
              onClick={() => {
                history.push('/messages');
              }}
            >
              Mensagens
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch({ type: 'LOGOUT', payload: false });
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Avatar
        size="sm"
        name="Teste 123"
        bg="teal.500"
        color="white"
        justifySelf="end"
      />
    </Flex>
  );
};
export default TopMenu;
