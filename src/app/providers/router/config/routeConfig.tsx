import { RouteProps } from 'react-router-dom'
import { PostDetailsPage } from 'src/pages/PostDetailsPage'
import { PostsPage } from 'src/pages/PostsPage'
import { NotFoundPage } from 'src/pages/NotFoundPage'
import { AppRoutes, getRoutePost, getRoutePostDetails } from 'src/shared/const/router'

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.POST]: {
        path: getRoutePost(),
        element: <PostsPage />,
    },
    [AppRoutes.POST_DETAILS]: {
        path: getRoutePostDetails(':id'),
        element: <PostDetailsPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
}
