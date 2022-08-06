import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "../cartSlice/cartSlice"
import favSlice from "../favSlice/favSlice"

export default configureStore({
    reducer : {
        cart : cartSlice,
        fav : favSlice
    }
})