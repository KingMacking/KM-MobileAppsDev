import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { URL_FIREBASE } from '../../../constants/firebase';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
    endpoints: (builder) => ({
        getProductsByCategory: builder.query({
            query: (categoryId) => `/products.json?orderBy="categoryId"&equalTo=${categoryId}`,
            transformResponse: (response) =>
                Object.keys(response).map((key) => ({
                    id: key,
                    ...response[key],
                })),
        }),
        getProductById: builder.query({
            query: (productId) => `/products.json?orderBy="id"&equalTo=${productId}`,
            transformResponse: (response) =>
                Object.keys(response).map((key) => ({
                    id: key,
                    ...response[key],
                })),
        }),
    }),
});

export const { useGetProductsByCategoryQuery, useGetProductByIdQuery } = productsApi;
