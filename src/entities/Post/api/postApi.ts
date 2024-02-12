import { Post } from 'src/entities/Post/model/types/types'
import { rtkApi } from 'src/shared/api/rtkApi'

const postApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<Post[], { limit: number, start: number }>({
            query: ({ limit = 5, start = 0 }) => ({
                url: '/posts',
                params:
                    {
                        _limit: limit,
                        _start: start,
                    },
            }),
        }),
        fetchPostById: builder.query<Post, number>({
            query: (id: number = 1) => ({
                url: `/posts/${id}`,
            }),
        }),
    }),
})

export const useFetchAllPosts = postApi.useFetchAllPostsQuery
export const useFetchPostById = postApi.useFetchPostByIdQuery
