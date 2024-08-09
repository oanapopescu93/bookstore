import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../utils/utils'

const initialState = {
    wishlist: getCookie("bookstore_wishlist") !== "" ? JSON.parse(getCookie("bookstore_wishlist")) : [],
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        wishlistAdd: (state, { payload }) => {		
            const itemInWishlist = state.wishlist.find((item) => item.id === payload.id)
			if (!itemInWishlist) {				
				state.wishlist.push({ ...payload, wishlistId: state.wishlist.length })
			}
            setCookie("bookstore_wishlist", JSON.stringify(state.wishlist))
        },
        wishlistRemove: (state, { payload }) => {
            const removeItem = state.wishlist.filter((item) => item.id !== payload.id)
      		state.wishlist = removeItem
            setCookie("bookstore_wishlist", JSON.stringify(state.wishlist))
        },
    }
})

export const {
    wishlistAdd,
    wishlistRemove,
} = wishlistSlice.actions

export default wishlistSlice.reducer