<template>
    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-12 mb-4">
        <div class="card h-100">
            <div class="card-body">
                <h4 class="card-title">{{product.productName}}</h4>
                <img class="card-img-top" :src="product.imageUrl" alt="" width="100%" height="100%"/>
                <hr>
                <span class="badge bg-primary mb-3">{{product.category}}</span>
                <h4 class="card-text">NT $ {{product.price}}</h4>
                <div class="button-container">
                    <router-link :to="{ name: 'products.edit', params: { id: product.productId } }" class="btn btn-outline-primary me-2 mb-2 mb-md-0" role="button">
                        Edit
                    </router-link>
                    <button type="button" class="btn btn-outline-warning me-2 mb-2 mb-md-0">Delete</button>
                    <ProductModalDetail @showMore="$store.dispatch('showProductDetails', product.productId)"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
  import { defineProps } from 'vue';
  import ProductModalDetail from "../components/ProductModalDetail.vue"
  defineProps({
    product: {
      type: Object,
      default: {},
    }
  })
</script>

<style scoped>
    img{
        max-width: 100%;
        object-fit: cover;
        cursor: pointer;
        display: inline-block;
        height: auto;
        vertical-align: middle;
        
    }
    .button-container {
        display: flex;
        justify-content: center;
        
    }
    .btn > a {
        text-decoration: none
    }

</style>
