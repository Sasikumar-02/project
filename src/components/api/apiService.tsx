import axios from "axios";
const axiosRequest = axios.create({
  baseURL: 'http://20.213.35.159:8050', 
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default axiosRequest;