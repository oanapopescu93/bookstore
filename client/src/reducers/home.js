import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [], 
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
            state.headerList = payload.headerList,
            state.finance = payload.finance            
            state.contact = payload.contact
            state.loaded = true
        },
        resetHome: () => initialState,
    }
})

export const {
    bringPayload,
    showPayload,
    resetHome
} = homeSlice.actions

export default homeSlice.reducer