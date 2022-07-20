import { configureStore } from '@reduxjs/toolkit'
import configuratorReducer from './state'

export const store = configureStore({
  reducer: {
    configurator: configuratorReducer
  },
})