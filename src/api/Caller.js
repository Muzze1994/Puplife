import axios from 'axios';

const caller = axios.create({
    baseURL: 'https://retoolapi.dev/OZixgM/puplife'
})

export default caller;