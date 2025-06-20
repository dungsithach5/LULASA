import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${'https://lulasa-production.up.railway.app/api/products'}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};