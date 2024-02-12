import clsx from 'clsx'
import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { RootState } from 'src/app/providers/StoreProvider'
import { getUIScrollByPath, uiActions } from 'src/features/UI'
import { useAppDispatch } from 'src/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInfiniteScroll } from 'src/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useInitialEffect } from 'src/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useThrottle } from 'src/shared/lib/hooks/useThrottle/useThrottle'
import './Page.scss'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
    onScrollStart?: () => void
}

export const Page = memo((props: PageProps) => {
    const {
        className,
        children,
        onScrollEnd,
        onScrollStart,
    } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerStartRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerEndRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useSelector((state: RootState) => getUIScrollByPath(state, pathname))

    useInfiniteScroll({
        triggerRef: triggerStartRef,
        wrapperRef,
        callback: onScrollStart,
    })

    useInfiniteScroll({
        triggerRef: triggerEndRef,
        wrapperRef,
        callback: onScrollEnd,
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        )
    }, 500)

    return (
        <main
            ref={wrapperRef}
            className={clsx('page', className)}
            onScroll={onScroll}
        >
            {onScrollStart ? (
                <div className='page__trigger' ref={triggerStartRef} />
            ) : null}
            {children}
            {onScrollEnd ? (
                <div className='page__trigger' ref={triggerEndRef} />
            ) : null}
        </main>
    )
})
