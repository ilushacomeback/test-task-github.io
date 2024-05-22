import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './helpers/getUser';
import { authApi } from '../api';

const initialState = getUser()

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem('user');
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload: { data } }) => {
        state.token = data.token;
        localStorage.setItem("user", JSON.stringify({ token: data.token }))
      }
    );
  },
});

export default authSlice.reducer;
export const { actions } = authSlice;
