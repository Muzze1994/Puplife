import axios from 'axios';

export function getOneForumPost(id) {
    return axios.get(`https://retoolapi.dev/OZixgM/puplife/${id}`)
    .catch((err) => {
        console.log(err)
    })
}
