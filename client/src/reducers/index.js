import {combineReducers} from 'redux'

import settingsReducer from './settings'
import pageReducer from './page'
import homeReducer from './home'
import popupReducer from './popup'
import cartReducer from './cart'
import wishlistReducer from './wishlist'
import filtersReducer from './filters'

const allReducers = combineReducers({	
	settings: settingsReducer,
	page: pageReducer,
	home: homeReducer,
	popup: popupReducer,
	cart: cartReducer,
	wishlist: wishlistReducer,
	filters: filtersReducer
})

export default allReducers