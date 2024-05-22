import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../../../app/model';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://test.v5.pryaniky.com/ru/data/v3/testmethods/docs/userdocs',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const { token } = state.authReducer;
      headers.set('x-auth', `${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => '/get',
    }),
    addData: builder.mutation({
      query: (data) => ({
        method: 'POST',
        url: '/create',
        body: data,
      }),
    }),
    removeData: builder.mutation({
      query: (id) => ({
        method: 'POST',
        url: `/delete/${id}`,
        body: id,
      }),
    }),
    renameData: builder.mutation({
      query: (data) => ({
        method: 'POST',
        url: `/set/${data.id}`,
        body: data,
      }),
    }),
  }),
});

export const {
  useGetDataQuery,
  useAddDataMutation,
  useRemoveDataMutation,
  useRenameDataMutation,
} = dataApi;
