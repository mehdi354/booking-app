import {combineReducers} from 'redux'
import HomeReducers from './HomeReducers'
import PropertyReducers from './PropertyReducers'
const rootReducers = combineReducers({
    home: HomeReducers,
    property: PropertyReducers
})
export default rootReducers;