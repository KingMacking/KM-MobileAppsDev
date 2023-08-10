import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { URL_FIREBASE } from '../../../constants/firebase';

export const settingsApi = createApi({
    reducerPath: 'settingsApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_FIREBASE }),
    endpoints: (builder) => ({
        getProfile: builder.query({
            query: ({ localId }) => ({
                url: `/users/${localId}.json`,
                method: 'GET',
            }),
        }),
        uploadProfilePicture: builder.mutation({
            query: ({ localId, image }) => ({
                url: `/users/${localId}.json`,
                method: 'PATCH',
                body: { profileImage: image },
            }),
        }),
    }),
});

export const { useGetProfileQuery, useUploadProfilePictureMutation } = settingsApi;
