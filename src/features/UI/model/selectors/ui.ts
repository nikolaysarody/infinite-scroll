import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'src/app/providers/StoreProvider'

export const getUIScroll = (state: RootState) => state.ui.scroll

export const getUIScrollByPath = createSelector(
    getUIScroll,
    (state: RootState, path: string) => path,
    (scroll, path) => scroll[path] || 0,
)
