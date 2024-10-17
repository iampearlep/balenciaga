import axios from "axios";
import { Product } from "@/types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<Product[]>("/api/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; 
  }
  };