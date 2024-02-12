import { useNavigate } from 'react-router-dom'
import { Post } from 'src/entities/Post/model/types/types'
import './PostItem.scss'

interface PostItemProps {
    post: Post
}

export const PostItem = ({ post }: PostItemProps) => {
    const navigate = useNavigate()
    return (
        <div className='post-item'>
            <div>
                {`№ ${post.id}`}
            </div>
            <div className='post-item__title'>
                {`Заголовок: ${post.title}`}
            </div>
            <div className='post-item__body'>
                {`Описание: ${post.body}`}
            </div>
            <button
                type='button'
                onClick={() => navigate(`/post/${post.id}`)}
            >
                Подробнее
            </button>
        </div>
    )
}
