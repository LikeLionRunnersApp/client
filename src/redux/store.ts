import {
  combineReducers,
  configureStore,
  Action,
  ThunkAction,
} from '@reduxjs/toolkit'

import { recruitmentSlice } from '@redux/slices/recruitmentSlice'

const reducer = combineReducers({
  recruitmentList: recruitmentSlice.reducer,
})

export const store = configureStore({
  reducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
