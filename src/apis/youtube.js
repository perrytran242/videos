import axios from 'axios';

const KEY = 'AIzaSyDGLHYmsOyqfUmzd0ABPUV39g7UtAszQdI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});