import { combineReducers } from 'redux';
import messagesReducer from './messagesReducer';
import triggersReducer from './triggersReducer';
import channelsReducer from './channelsReducer';
import loginReducer from './loginReducer';

const myReducers = combineReducers({
  messages: messagesReducer,
  triggers: triggersReducer,
  channels: channelsReducer,
  login: loginReducer,
});

export default myReducers;
