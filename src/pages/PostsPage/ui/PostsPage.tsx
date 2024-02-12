import React, { useCallback, useState } from 'react'
import { PostList } from 'src/entities/Post'
import { useFetchAllPosts } from 'src/entities/Post/api/postApi'
import { Page } from 'src/widgets/Page'

const PostsPage = () => {
    const [currentPostStart, setCurrentPostStart] = useState<number>(0)
    const {
        data: posts,
        isLoading,
    } = useFetchAllPosts({ limit: 10, start: currentPostStart })

    const onLoadPrevPart = useCallback(() => {
        setCurrentPostStart((prev) => {
            return prev > 0 ? prev - 1 : prev
        })
    }, [])

    const onLoadNextPart = useCallback(() => {
        setCurrentPostStart((prev) => {
            return prev < 93 ? prev + 1 : prev
        })
    }, [])

    return (
        <Page
            onScrollStart={onLoadPrevPart}
            onScrollEnd={onLoadNextPart}
        >
            <PostList
                posts={posts || []}
                isLoading={isLoading}
            />
        </Page>
    )
}

export default PostsPage
