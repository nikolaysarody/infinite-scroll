import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({}),
})
