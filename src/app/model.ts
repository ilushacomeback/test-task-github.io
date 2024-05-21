import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer, authActions, authApi, dataApi } from '../entities';

const actions = {
  ...authActions,
};

const reducer = combineReducers({
  authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [dataApi.reducerPath]: dataApi.reducer,
});

export { actions };

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, dataApi.middleware]),
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
