import axios, { AxiosInstance } from 'axios';

// Create a new Axios instance
const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api', // Replace with your API base URL
    timeout: 5000, // Set a timeout value if needed
    headers: {
        'Content-Type': 'application/json', // Set your desired headers
    },
});

export default instance;