import { useParams } from 'react-router-dom'
import { PostDetails } from 'src/entities/Post'
import { Page } from 'src/widgets/Page'
import './PostDetailsPage.scss'

const PostDetailsPage = () => {
    const { id } = useParams<{ id: string }>()

    return (
        <Page className='post-details-page'>
            <PostDetails id={Number(id)} />
        </Page>
    )
}

export default PostDetailsPage
