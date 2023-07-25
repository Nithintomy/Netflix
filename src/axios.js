import axios from 'axios';
import {baseURL} from './Constants/constants'


const instance = axios.create({
    baseURL:baseURL
});



export default instance