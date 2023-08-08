import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { URL_FIREBASE } from '../../../constants/firebase';

export const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: `/orders.json`,
                method: 'POST',
                body: order,
            }),
            invalidatesTags: ['Orders'],
        }),
        getOrders: builder.query({
            query: () => `orders.json`,
            transformResponse: (response) => {
                if (!response) return [];
                return Object.keys(response).map((key) => ({
                    id: key,
                    ...response[key],
                }));
            },
            providesTags: ['Orders'],
        }),
    }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = ordersApi;
