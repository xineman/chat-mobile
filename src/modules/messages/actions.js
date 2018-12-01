import { createActions } from 'redux-actions';


export const {
  messages: {
    fetch: fetchMessages,
  },
  a,
} = createActions({
  MESSAGES: {
    FETCH: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
  },
});
