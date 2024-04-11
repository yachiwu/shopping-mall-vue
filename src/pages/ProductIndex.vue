<template>
    <div class="container" mt-2>
        <h2 class="mt-3">Product List</h2>
        <router-link :to="{ name: 'products.create' }" class="btn btn-outline-primary mb-2" role="button">
            Create Product
        </router-link>
        
        <div class="row">
          <ProductCard v-for="product in products" :product="product" :key="product.productId" />
        </div>
    </div>
</template>
<script setup>
    import ProductCard from "../components/ProductCard.vue"
    import { useStore } from 'vuex';
    import { computed, onMounted } from "vue";
    const store = useStore();
    const products = computed(()=> store.state.product.list);
    onMounted(() => {
      store.dispatch("loadAllProducts");
    });
    console.log(products)
    
</script>
<style scoped>
</style>