import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from 'features/Auth';
import { loadUser, reducer as oidcReducer } from 'redux-oidc';
import { userManager } from 'utils';

const rootReducer = {
  auth: authReducer,
  oidc: oidcReducer
}

 const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
});

loadUser(store, userManager)

export default store;