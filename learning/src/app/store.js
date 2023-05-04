import { configureStore } from '@reduxjs/toolkit'
import menuReducer from '../pages/calendar/components/menu/menuSlice'

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
})