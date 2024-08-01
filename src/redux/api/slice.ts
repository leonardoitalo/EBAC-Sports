import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduto } from '../../interfaces/IProduto';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports' }),
  endpoints: (builder) => ({
    getData: builder.query<IProduto[], void>({
      query: () => '',
    }),
  }),
});

export const { useGetDataQuery } = apiSlice;