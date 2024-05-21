import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://test.v5.pryaniky.com',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        method: 'POST',
        body: data,
        url: '/ru/data/v3/testmethods/docs/login',
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
