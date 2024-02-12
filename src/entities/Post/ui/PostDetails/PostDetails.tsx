import './PostDetails.scss'
import { useFetchPostById } from 'src/entities/Post/api/postApi'
import { PageLoader } from 'src/widgets/PageLoader'

interface PostDetailsProps {
    id?: number
}

export const PostDetails = (props: PostDetailsProps) => {
    const {
        id = 0,
    } = props

    const {
        data: post,
        isLoading,
    } = useFetchPostById(id)

    return (
        <>
            {isLoading ? (
                <PageLoader />
            ) : (
                <div className='post-details'>
                    <div>
                        №
                        {post?.id}
                    </div>
                    <div className='post-details__title'>
                        Заголовок:
                        {' '}
                        {post?.title}
                    </div>
                    <div className='post-details__body'>
                        Описание:
                        {' '}
                        {post?.body}
                    </div>
                </div>
            )}
        </>
    )
}
