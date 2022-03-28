import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { sudokuSlice } from './reducers'


const rootReducer = combineReducers({
    sudoku: sudokuSlice.reducer
})
export const store = configureStore({
  reducer: rootReducer,
})