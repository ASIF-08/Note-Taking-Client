import axios from "axios";
import config from "@/config";

const login = async (userData) => {
    const response = await axios.post(`${config.BASE_URL}/api/auth/login`, userData);
    return response.data.data;
};

const register = async (userData) => {
    const response = await axios.post(`${config.BASE_URL}/api/auth/register`, userData);
    return response.data.data;
};

export default {
    login,
    register
};