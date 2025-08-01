import axios from 'axios';
import { getAccessToken } from './authService';

const API_URL = import.meta.env.VITE_API_BASE_URL || '';

// 2. Create an axios instance
export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    }
} );

// Response interceptor for clean error handling
apiClient.interceptors.response.use(
  response => response,  // pass through successful responses
  error => {
    // If we got a response from the server
      if ( error.response ) {
        console.log(error.response)
      const { status, data } = error.response;
      const msg = data?.message || error.response.statusText;
      console.error(
        `[API error] ${status} – ${msg}`
      );
      // Optionally, you could throw a new Error to normalise downstream
      return Promise.reject(new Error(`Request failed (${status}): ${msg}`));
    }
    
    // If the request was made but no response received
    if (error.request) {
      console.error('[API error] No response received from server');
      return Promise.reject(new Error('No response received from server'));
    }
    
    // Something went wrong setting up the request
    console.error(`[API error] ${error.message}`);
    return Promise.reject(new Error(`Unexpected error: ${error.message}`));
  }
);

apiClient.interceptors.request.use(config => {
  const token = getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});