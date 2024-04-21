import axios from "axios";

// URL API: https://api.themoviedb.org/3/movie/now_playing?api_key=a2ba0dd12cd871f1953082577cbdada9&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
