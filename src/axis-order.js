import axios  from "axios";

const instance = axios.create({
    baseURL: "https://burger-635c1-default-rtdb.firebaseio.com/"
});

export default instance;