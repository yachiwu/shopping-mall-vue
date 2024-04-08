<template>
    <div class="col-md-3 mb-4">
        <div class="card h-100">
            <div class="card-body">
                <h4 class="card-title">{{product.ProductName}}</h4>
                <img class="card-img-top" :src="product.imageUrl" alt="" width="100%" height="100%"/>
                <hr>
                <span class="badge bg-primary mb-3">{{product.category}}</span>
                <h4 class="card-text">NT $ {{product.price}}</h4>
                <div class="button-container">
                    <router-link :to="{ name: 'products.edit', params: { id: product.ProductId } }" class="btn btn-outline-primary me-2" role="button">
                        Edit
                    </router-link>
                    <button type="button" class="btn btn btn-outline-warning me-2">Delete</button>
                    <ProductModalDetail/>
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
