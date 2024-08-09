import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filters: [
        { type: "max_price", value: null },
        { type: "author", value: null },
        { type: "tags", value: [] },
        { type: "formats", value: [] },
    ], 
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        changeFilters: (state, { payload }) => { 
            if(payload.type){
                switch(payload.type){
                    case "max_price":
                        state.filters[0] = payload
                        break
                    case "author":
                        state.filters[1] = payload
                        break
                    case "tags":
                        state.filters[2] = payload
                        break
                    case "formats":
                        state.filters[3] = payload
                        break
                }
            }            
        },
        resetFilters: () => initialState,
    }
})

export const {
    changeFilters,
    resetFilters
} = homeSlice.actions

export default homeSlice.reducer