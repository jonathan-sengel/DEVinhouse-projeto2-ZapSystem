import { Route, Switch } from 'react-router-dom';
import { Flex, Spinner } from '@chakra-ui/react';

import {
  MessagesPage,
  NewMessagePage,
  EditMessagePage,
  DashboardPage,
  LoginPage,
} from './pages';

import { PageWrapper } from './components';

import { LateralMenu, TopMenu } from './components';
import { useSelector } from 'react-redux';

const Routes = ({ isLoading }) => {
  const isLogged = useSelector(state => state.login);
  console.log(isLogged);

  return (
    <Switch>
      <Route path="/">
        {!isLogged && <LoginPage />}
        {isLogged && (
          <PageWrapper>
            <LateralMenu />
            <Flex w="100%" minH="100%" direction="column" alignItems="center">
              <TopMenu />
              <Route path="/messages" exact>
                {isLoading && <Spinner size="xl" my="20%" color="teal.500" />}
                {!isLoading && <MessagesPage />}
              </Route>
              <Route path="/new/message" exact>
                <NewMessagePage />
              </Route>
              <Route path="/edit/message" exact>
                <EditMessagePage />
              </Route>
              <Route path="/dashboard">
                <DashboardPage />
              </Route>
            </Flex>
          </PageWrapper>
        )}
      </Route>
    </Switch>
  );
};

export default Routes;
