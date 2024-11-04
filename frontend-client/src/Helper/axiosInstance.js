import axios from "axios"
const Base_URL="http://localhost:4000";
const axiosInstance=axios.create();
axiosInstance.defaults.baseURL=Base_URL;
axiosInstance.defaults.withCredentials=true;
//axiosInstance.interceptors.request.
export default axiosInstance;