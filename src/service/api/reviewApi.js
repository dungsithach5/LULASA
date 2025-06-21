import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchReviews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/reviews`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};