import axios from "axios";

export default () => axios.create({
    params: {
        key: 'aa36fe7dac284553bee95641964793fd'
    },
    baseURL: 'https://api.rawg.io/api',
})