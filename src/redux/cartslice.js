import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({

    name:"cart",
    initialState: {},
    reducers : {

        add : (state,action)=>{
            const id = action.payload
           if(state[id]){
            state[id] += 1
           }
           else{
            state[id] = 1
           }
        },
        rem : (state,action)=>{
             const id = action.payload
          if(state[id] && state[id] > 0){
            state[id] -= 1

            if(state[id]==0){
                delete state[id]
            }
          }
          
        }
       
    }
})

export const {add,rem}  = cartslice.actions

export default cartslice.reducer