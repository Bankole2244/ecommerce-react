import { createSlice } from '@reduxjs/toolkit'

let initialState ={
  total:0,
  cartdata:[]
}


const cart = createSlice({
      name: 'cart',
      initialState,
      reducers:{
        addToCart:(state) =>{
          state.total = state.total + 1
        }
        
      }
})

 export default cart.reducer
export const {addToCart} = cart.actions