import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from '../utils/utils'

const initialState = {
    lang: getCookie("bookstore_language") !== "" ? getCookie("bookstore_language") : "ENG",
    currency: getCookie("bookstore_currency") !== "" ? getCookie("bookstore_currency") : "USD",
    date: getCookie("bookstore_date") !== "" ? getCookie("bookstore_date") : "d.m.Y H:i",
    cookies: getCookie("bookstore_cookies") !== "" ? getCookie("bookstore_cookies") : "0",
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeLanguage: (state, { payload }) => {
            state.lang = payload
            setCookie("bookstore_language", payload)
        },
        changeCurrency: (state, { payload }) => {
            state.currency = payload
            setCookie("bookstore_currency", payload)
        },
        changeDate: (state, { payload }) => {
            state.date = payload
            setCookie("bookstore_date", payload)
        },
        changeCookies: (state) => {
            state.cookies = '1'
            setCookie("bookstore_cookies", '1')
        },
        resetSettings: () => initialState,
    }
})

export const {
    changeLanguage,
    changeCurrency,
    changeDate,
    changeCookies,
    resetSettings
} = settingsSlice.actions

export default settingsSlice.reducer