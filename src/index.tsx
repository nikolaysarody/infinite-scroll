import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './app/App'
import './app/styles/index.scss'
import { ErrorBoundary } from './app/providers/ErrorBoundary'
import { StoreProvider } from './app/providers/StoreProvider'

createRoot(document.getElementById('root')!)
    .render(
        <HashRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </StoreProvider>
        </HashRouter>,
    )
