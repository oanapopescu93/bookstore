import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: "home",
    type: null,
    subtype: null,
    details: null
}

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        changePage: (state, { payload }) => {
            state.page = payload.choice ? payload.choice : null
            state.type = payload.type ? payload.type : null
            state.subtype = payload.subtype ? payload.subtype : null
            state.details = payload.details ? payload.details : null
        },
        resetPage: () => initialState,
    }
})

export const {
    changePage,
} = pageSlice.actions

export default pageSlice.reducer