import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../../../app/model';

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test.v5.pryaniky.com',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const { token } = state.authReducer;
      headers.set('x-auth', `${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => '/ru/data/v3/testmethods/docs/userdocs/get',
    }),
  }),
});

export const { useGetDataQuery } = dataApi
