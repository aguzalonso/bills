import { configureStore } from '@reduxjs/toolkit'
import itemStore from './features/items/itemStore'

export default configureStore({
  reducer: {
    itemStore
  },
})