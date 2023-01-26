import axios from "axios";
import store from "@/store";

axios.interceptors.request.use(
    // this function is called automatically whenever any request goes out
    (request) => {
        if (request.url.includes("notes")) {
            request.headers["Authorization"] = store.getters.token;
        }
        return request;
    },
    (error) => Promise.reject(error)
);