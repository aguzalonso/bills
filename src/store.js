import { configureStore } from '@reduxjs/toolkit'
import itemStore from './features/items/itemStore'
import tabValue from './features/items/tabValue'

export default configureStore({
  reducer: {
    itemStore,
    tabValue,
  },
})