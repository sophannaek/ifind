import {API_BASE_URL, API_KEY} from './config';


export function get(path,queryParams){
    const query = queryParams;
    return fetch(`${API_BASE_URL}${path}?${query}`,{
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            Origin: 'localhost',
            withCredential: true,
        }
    });
}