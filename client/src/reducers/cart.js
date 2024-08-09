import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../utils/utils'

const initialState = {
    cart: getCookie("bookstore_cart") !== "" ? JSON.parse(getCookie("bookstore_cart")) : [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAdd: (state, { payload }) => {	
            const itemInCart = state.cart.find((item) => item.id === payload.id && item.selected_format === payload.selected_format)
			if (!itemInCart) {				
				state.cart.push({ ...payload, cartId: state.cart.length })
			}
            setCookie("bookstore_cart", JSON.stringify(state.cart))
        },
        cartUpdate: (state, { payload }) => {
            const updatedCart = state.cart.map((item) => {
                if(item.cartId === payload.cartId){
                    return {
                        ...item,
                        selected_format: payload.selected_format
                    }
                }
                return item
            })
            state.cart = updatedCart
            setCookie("bookstore_cart", JSON.stringify(updatedCart))
        },
        cartRemove: (state, { payload }) => {
            state.cart = state.cart.filter((item) => !(item.cartId === payload.cartId))
            setCookie("bookstore_cart", JSON.stringify(state.cart))
        },
        cartRemoveAll: (state) => {
            state.cart = []
            setCookie("bookstore_cart", JSON.stringify(state.cart))
        },
    }
})

export const {
    cartAdd,
    cartUpdate,
    cartRemove,
    cartRemoveAll
} = cartSlice.actions

export default cartSlice.reducer