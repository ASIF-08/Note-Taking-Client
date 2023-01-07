import axios from  "axios";




const url = "http://localhost:3001/api";


export const login =  async(userData) => {
    console.log("hello", userData);
    const response = await axios.get(url);
    console.log("response --> ", response.data)
    return response.data.data;
};
export default {
    login
};