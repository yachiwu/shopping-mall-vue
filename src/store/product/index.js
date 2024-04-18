import {
    listProducts,createProduct
} from "../../apis/product";

export const product = {
    state(){
        return {
           list:[],
           currentId : null
        };
    },
    mutations: {
        initializeProducts(state,products){
            state.list = products;
        },
        setCurrentId(state,id){
            state.currentId = id;
        }
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
        async showProductDetails({commit},id){
            commit("setCurrentId",id);
        }  
    },
    getters:{
        productDetails(state){
            return state.list.find((product)=> product.productId === state.currentId );
        }
    }
};