import * as actionTypes from '../types'
const initialState = {
    detailsData: [],
    loading: true,
    detail: {},
    searchData:[]
}
const PropertyReducers = (state=initialState,action) => {
    switch(action.type) {
        case actionTypes.FETCH_DATA: {
            return {
                ...state,
                detailsData: action.payload,
                loading: false
            }
        }
        case actionTypes.SINGLE_POST: {
            return {
                ...state,
                detail: action.payload,
                loading: false
            }
        }
        case actionTypes.SUBMIT_POST: {
            return {
                ...state,
                loading: false
            }
        }
        case actionTypes.SET_LOADING_STATUS: {
            return {
                ...state,
                loading:true
            }
        }
        case actionTypes.SEARCH_PROPERTIES_RESULT: {
            console.log()
            return {
                ...state,
                searchData: action.payload,
                loading: false
            }
        }
        default: {
            return state
        }
    }
}
export default PropertyReducers