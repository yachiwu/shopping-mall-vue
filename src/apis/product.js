import { request } from "../utils/request";
import axios from 'axios';

export async function listProducts() {
    try {
        const response = await request("/api/products" );
        return response.results; 
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; 
    }
}
export async function createProduct(data) {
    try {
        const response = await axios.post("/api/products", data);
    } catch (error) {
        console.error('Create products:', error);
        throw error;
    }
}