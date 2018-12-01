import { handleActions } from 'redux-actions';
import {
  fetchMessages,
} from './actions';


const chats = handleActions(
  {
    [fetchMessages.request]: state => ({
      ...state,
      isLoading: true,
    }),
    [fetchMessages.success]: state => ({
      ...state,
      isLoading: false,
    }),
    [fetchMessages.failure]: state => ({
      ...state,
      isLoading: false,
    }),
  },
  {
    isLoading: false,
    users: [],
    messages: [],
  },
);

export default chats;
