import { environments } from '../common/environments';
import axios from 'axios';

const API_URL = environments.REACT_APP_API_SERVICE_URL + '/book'

export function getAllUsersFromApi() {
    
    const options = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    return axios.get(API_URL,options);
}
