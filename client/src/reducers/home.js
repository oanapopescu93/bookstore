import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [], 
    searchProducts: [], 
    headerList: [], 
    finance: [],    
    contact: [],
    loaded: false
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        bringPayload: () => {},
        showPayload: (state, { payload }) => { 
            state.products = payload.products
            state.searchProducts = payload.products
            state.headerList = payload.headerList,
            state.finance = payload.finance            
            state.contact = payload.contact
            state.loaded = true
        },
        filterProducts: (state, { payload }) => {
            state.searchProducts = payload
        },
        resetHome: () => initialState,
    }
})

export const {
    bringPayload,
    showPayload,
    filterProducts,
    resetHome
} = homeSlice.actions

export default homeSlice.reducer