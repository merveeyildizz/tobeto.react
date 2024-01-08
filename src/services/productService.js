import axios from "axios";
export default class ProductService {
    getProducts() {
        return axios.get("https://dummyjson.com/products");
    }

    getById(id) {
        return axios.get("https://dummyjson.com/products/" + id)
            .catch(error => {
                console.error("Error fetching product by ID:", error);
                throw error; 
            });
    }
}
