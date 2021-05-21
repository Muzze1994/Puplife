import axios from 'axios';

export function Delete(id) {
    axios.delete(`https://retoolapi.dev/OZixgM/puplife/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err)
        })
}
