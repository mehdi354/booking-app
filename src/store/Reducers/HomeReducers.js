import * as actionTypes from '../types'
const initialState = {
    ReviewData : [
        {
        id: Math.random().toString(),
        review: 'Julia is very nice host and the house is clean, the room is very comfortable with beautiful views. We have seen sunset just out the...',
        img: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
        ratings: 5,
        name: 'John',
        location: 'China',
        avaterlink: 'https://images.unsplash.com/photo-1520065786657-b71a007dd8a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
    },
    {
        id: Math.random().toString(),
        review: 'The best accommodation in Chittagong with its newly renovated floors. Centrally air-conditioned and fully carpeted, fully furnished en-suite rooms in compliance with....',
        img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
        ratings: 4,
        name: 'Emily',
        location: 'London',
        avaterlink: 'https://images.unsplash.com/photo-1526098069195-1ca492efa127?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=354&q=80'
    },
    {
        id: Math.random().toString(),
        review: 'Location Heart of the Port city Chattogram, Excellent Accommodation and Interior Design all are Unique design and Pull and Gem , Here we attend many meeting...',
        img: 'https://images.unsplash.com/photo-1561391922-3c04a61b77d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        ratings: 3,
        name: 'Max',
        location: 'Germany',
        avaterlink: 'https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    }
    ],
    bookedData : [{
        id: Math.random().toString(),
        desc: 'Elegantly designed and equipped with luxurious fittings and amenities, Le Méridien Towers Makkah is directly connected to the Holy Mosque',
        img: 'https://images.unsplash.com/photo-1531737212413-667205e1cda7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=375&q=80',
        price: 22,
        totalReview: 621
    },
    {
        id: Math.random().toString(),
        desc: 'Julia is very nice host and the house is clean, the room is very comfortable with beautiful views. We have seen sunset just out the...',
        img: 'https://images.unsplash.com/photo-1530276371031-2511efff9d5a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGF1c3RyYWxpYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 45,
        totalReview: 841
    },
    {
        id: Math.random().toString(),
        desc: 'Elegantly designed and equipped with luxurious fittings and amenities, Le Méridien Towers Makkah is directly connected to the Holy Mosque',
        img: 'https://images.unsplash.com/photo-1494233892892-84542a694e72?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8YXVzdHJhbGlhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 225,
        totalReview: 233
    },
    {
        id: Math.random().toString(),
        desc: 'Positive: Value for money - Being a well known chain of 5 * hotels, the price specially for this peak season was very reasonable. Facilities matched the expectation. ',
        img: 'https://images.unsplash.com/photo-1553851919-596510268b99?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
        price: 225,
        totalReview: 842
    }],
    galleryData : [{
        id: Math.random().toString(),
        type: 'HANDBAG SHOPPING',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Chanda Stacker',
        designation: 'Food Blogger'
    },
    {
        id: Math.random().toString(),
        type: 'WHERE TO SEE COMEDY',
        img: 'https://images.unsplash.com/photo-1599372477648-bc918851435b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Edgar Agbayani',
        designation: 'Chef'
    },
    {
        id: Math.random().toString(),
        type: 'SCARF SHOPS ',
        img: 'https://images.unsplash.com/photo-1484571113008-163c39101ccb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Carlos Muela',
        designation: 'SoMa StrEat Food Park'
    },
    {
        id: Math.random().toString(),
        type: 'WINE BARS',        
        img: 'https://images.unsplash.com/photo-1522753795394-7d81c73028ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
        name: 'CApexer',
        designation: 'Artist'
    },
    {
        id: Math.random().toString(),
        type: 'VINTAGE DECOR',
        img: 'https://images.unsplash.com/photo-1520769311170-3e7df0ea5a0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        name: 'Andrew McClintock',
        designation: 'Gallerist'
    }]
}
const HomeReducers = (state=initialState,action) => {
    switch(action.type) {
        case actionTypes.SET_REVIEW_DATA: {
            return {
                ...state,
            }
        }
        case actionTypes.SET_BOOKED_DATA: {
            return {
                ...state,
            }
        }
        case actionTypes.SET_GALLERY_DATA: {
            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
}
export default HomeReducers