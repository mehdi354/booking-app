import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://5ff863ea10778b00170433c7.mockapi.io/api'
});
export default instance