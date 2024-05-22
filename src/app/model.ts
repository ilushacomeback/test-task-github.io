import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer, authActions, authApi, dataApi, dataReducer, dataActions } from '../entities';

const actions = {
  ...authActions,
  ...dataActions
};

const reducer = combineReducers({
  authReducer,
  dataReducer,
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
