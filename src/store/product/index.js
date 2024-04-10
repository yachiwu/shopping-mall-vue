import {
    listProducts
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
        async loadAllProducts({ commit }) {
            const products = await listProducts();
            commit("initializeProducts", products);
          },
    },
};