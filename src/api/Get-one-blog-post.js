import axios from 'axios';

export function getOneBlogPost(id) {
    return axios.get(`https://retoolapi.dev/OZixgM/puplife/${id}`)
}
