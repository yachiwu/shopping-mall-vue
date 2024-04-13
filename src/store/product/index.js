import {
    listProducts,createProduct
} from "../../apis/product";

export const product = {
    state(){
        return {
           list:[]     
        };
    },
    mutations: {
        initializeProducts(state,products){
            state.list = products
        },
    },
    actions: {
        async newProduct({dispatch}, data) {
            await createProduct(data);
            dispatch("loadAllProducts");
          }, 
        async loadAllProducts({ commit }) {
            const products = await listProducts();
            commit("initializeProducts", products);
          },
    },
};