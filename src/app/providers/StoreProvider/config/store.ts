import { configureStore } from '@reduxjs/toolkit'
import { uiReducer } from 'src/features/UI/model/slices/UISlice'
import { rtkApi } from 'src/shared/api/rtkApi'

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
