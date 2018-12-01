import { createActions } from 'redux-actions';


export const {
  user: {
    signIn,
    signOut,
  },
} = createActions({
  USER: {
    SIGN_IN: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
    SIGN_OUT: {
      REQUEST: undefined,
      SUCCESS: undefined,
      FAILURE: undefined,
    },
  },
});
