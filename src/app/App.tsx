import { Suspense } from 'react'
import { AppRouter } from 'src/app/providers/router'

const App = () => {
    return (
        <div className='app'>
            <Suspense fallback=''>
                <div className='content-page'>
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
