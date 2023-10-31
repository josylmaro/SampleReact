import * as toolkit from '@reduxjs/toolkit'

import bookReadersManagementReducer from './reducers/bookReadersManagementReducer'
import { useDispatch } from 'react-redux'

export const store = toolkit.configureStore({
    reducer: {
        bookReaderManagement: bookReadersManagementReducer
    },
  })
  
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 
