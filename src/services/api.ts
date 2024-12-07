import axios from "axios";

const API_BASE_URL =
  "https://ecommerce-product-api-laravel-production.up.railway.app/api";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
