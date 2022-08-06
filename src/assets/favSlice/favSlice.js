import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    name : "fav",
    initialState : {
        FavArr : []
    },
    reducers : {
        addToFav : (state,action)=>{
            state.FavArr = [...state.FavArr,...action.payload]
        },
        rmvFav : (state,action)=>{
            state.FavArr = [...action.payload]
        }
    }
})


export const  {addToFav , rmvFav} = favSlice.actions

export default favSlice.reducer