import axios from 'axios';

export function getAllForumPosts() {
    return axios.get(`https://retoolapi.dev/OZixgM/puplife`)
    .catch((err) => {
        console.log(err)
    })
}

