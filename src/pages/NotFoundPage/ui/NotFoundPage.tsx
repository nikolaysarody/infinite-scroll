import './NotFoundPage.scss'
import clsx from 'clsx'

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => (
    <div className={clsx('not-found-page', className)}>
        Страница не найдена
    </div>
)
