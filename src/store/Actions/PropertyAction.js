import * as actionTypes from '../types'
import axios from '../../Config/Config'
export const fetch_properties = ()=> dispatch =>{
    axios.get('/properties')
            .then(response =>{ 
                setTimeout(()=>{
                    dispatch({
                        type: actionTypes.FETCH_DATA,
                        payload: response.data
                    })
                },2000)
            }
        );
}

export const singleProperty= (id) => dispatch => {
    axios.get(`/properties?id=${id}`)
        .then(response =>{ 
            dispatch({
                type: actionTypes.SINGLE_POST,
                payload: response.data[0]
            })
        }
        );
}

export const submitPost = (data,history) => dispatch => {
    console.log(data)
    axios.post(`/properties`, data)
        .then(response =>{ 
            dispatch({
                type: actionTypes.SUBMIT_POST,
            });
        }
    )
    .then(()=> history.push('/property-list'))
}

const redirect = (history) => dispatch => {
    history.push('/searchList')
}
export const searchProperties = (location,history) => dispatch => {
    axios.get(`/properties?location=${location}`)
        .then(response =>{ 
            dispatch({
                type: actionTypes.SEARCH_PROPERTIES_RESULT,
                payload: response.data
            })
        })
       .then(() => new Promise(resolve => setTimeout(redirect(history), 2000))) 
}