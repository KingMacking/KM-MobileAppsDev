import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { URL_FIREBASE } from '../../../constants/firebase';

export const settingsApi = createApi({
    reducerPath: 'settingsApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
    tagTypes: ['Profile'],
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: ({ localId }) => ({
                url: `/users/${localId}.json`,
                method: 'GET',
            }),
            providesTags: ['Profile'],
        }),
        uploadProfilePicture: builder.mutation({
            query: ({ localId, image }) => ({
                url: `/users/${localId}.json`,
                method: 'PATCH',
                body: { profileImage: image },
            }),
            invalidatesTags: ['Profile'],
        }),
        registerUserData: builder.mutation({
            query: (credentials) => {
                const { userData, localId } = credentials;
                return {
                    url: `/users/${localId}.json`,
                    method: 'PUT',
                    body: userData,
                };
            },
            invalidatesTags: ['Profile'],
        }),
        updateAddress: builder.mutation({
            query: ({ localId, location }) => ({
                url: `/users/${localId}.json`,
                method: 'PATCH',
                body: {
                    location,
                },
            }),
            invalidatesTags: ['Profile'],
        }),
    }),
});

export const {
    useGetProfileQuery,
    useUploadProfilePictureMutation,
    useRegisterUserDataMutation,
    useUpdateAddressMutation,
} = settingsApi;
