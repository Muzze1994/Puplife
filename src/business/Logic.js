import axios from 'axios';

const caller = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
})

export default caller;