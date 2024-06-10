import { createSlice } from '@reduxjs/toolkit';
import { DataTable } from '../ui/table';
import { dataApi } from '../api';

interface State {
  data: Array<DataTable>;
}

const initialState: State = { data: [] };

const dataSlice = createSlice({
  name: 'dataSlice',
  initialState,
  reducers: {
    addData(state, { payload }) {
      state.data.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        dataApi.endpoints.getData.matchFulfilled,
        (state, { payload: { data } }) => {
          state.data.push(...data);
        }
      )
      .addMatcher(
        dataApi.endpoints.removeData.matchFulfilled,
        (state, { payload: { id } }) => {
          state.data = state.data.filter((doc) => doc.id !== id);
        }
      );
  },
});

export default dataSlice.reducer;
export const { actions } = dataSlice;
