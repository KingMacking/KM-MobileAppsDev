import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { URL_SIGN_IN, URL_SIGN_UP, ATUH_BASE_URL } from '../../../constants/firebase';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: ATUH_BASE_URL }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (credentials) => ({
                url: URL_SIGN_IN,
                method: 'POST',
                body: credentials,
            }),
        }),
        signUp: builder.mutation({
            query: (credentials) => ({
                url: URL_SIGN_UP,
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
