import axios from 'axios';

export function Post (newForumPost) {
        axios.post('https://retoolapi.dev/OZixgM/puplife',  newForumPost )
        .then(res => {
           console.log(res);
           console.log(res.data);   
        })   
}
