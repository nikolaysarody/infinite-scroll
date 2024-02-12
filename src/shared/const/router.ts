export enum AppRoutes {
    POST = 'post',
    POST_DETAILS = 'post_details',
    NOT_FOUND = 'not_found',
}
export const getRoutePost = () => '/'
export const getRoutePostDetails = (id: string) => `/post/${id}`

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRoutePost()]: AppRoutes.POST,
    [getRoutePostDetails(':id')]: AppRoutes.POST_DETAILS,
}
