import { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'src/app/providers/router/config/routeConfig'
import { PageLoader } from 'src/widgets/PageLoader'

const AppRouter = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className='page-wrapper'>
                            {element}
                        </div>
                    )}
                />
            ))}

        </Routes>
    </Suspense>
)

export default memo(AppRouter)
