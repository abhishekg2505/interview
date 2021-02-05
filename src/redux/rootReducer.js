import { combineReducers } from 'redux'

//Import all the reducers
import restaurantReducer from './reducer/restaurantReducer'

export default combineReducers({
    restaurantData: restaurantReducer
})



