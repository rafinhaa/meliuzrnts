import axios from "axios";

const api = axios.create({
    baseURL: "https://meliuz-server.herokuapp.com/",
});

export default api;