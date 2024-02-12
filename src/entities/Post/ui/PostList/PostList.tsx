import './PostList.scss'
import { Post } from 'src/entities/Post/model/types/types'
import { PostItem } from 'src/entities/Post/ui/PostItem/PostItem'

interface PostListProps {
    posts: Post[]
    isLoading: boolean
}

export const PostList = ({ posts, isLoading }: PostListProps) => {
    return (
        <>
            <div className='post-list'>
                {posts?.map((post) => (
                    <PostItem
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
            {isLoading && <div>Загрузка данных...</div>}
        </>
    )
}
