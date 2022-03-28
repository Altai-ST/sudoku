import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  color: 'gray',
  number: {
    id:0,
    num:0, 
    newId:0
  }
}

export const sudokuSlice = createSlice({
  name: 'sudokus',
  initialState,
  reducers: {
    switchColor: (state, action) => {
      state.color = action.payload
    },
    newNum: (state, action)=>{
      state.number.id = action.payload.id
      state.number.num = action.payload.num
      state.number.newId = action.payload.newId
    }
  },
})

export const {switchColor, newNum} = sudokuSlice.actions

export default sudokuSlice.reducer