import { configureStore } from '@reduxjs/toolkit'
import layer from './layer'

export default configureStore({
  reducer: {
    layer
  },
})