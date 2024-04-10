import { request } from "../utils/request";
export async function listProducts() {
    try {
        const response = await request("http://localhost:8080/products" );
        return response.data.results; 
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; 
    }
}