<template>
    <div class="container">
        <div class="row">
            <h2 class="text-center mt-3">Edit Product {{productId}}</h2>
                <div class="col-lg-4">
                    <img class="card-img-top" src="https://img.pchome.com.tw/cs/items/DXBG7RA900HAQI3/000001_1710145116.jpg" alt="" width="100%" height="100%"/>
                </div>
                <div class="col-lg-8">
                    <form>
                        <fieldset>
                            <div>
                                <label for="productName" class="form-label mt-4">Product Name</label>
                                <input type="text" class="form-control" id="productName" placeholder="productName" autocomplete="off">
                            </div>
                            <div>
                                <label for="category" class="form-label mt-4">Category</label>
                                <input type="text" class="form-control" id="category" placeholder="category" autocomplete="off">
                            </div>
                            <div>
                                <label for="price" class="form-label mt-4">Price</label>
                                <input type="number" class="form-control" id="price" placeholder="price" autocomplete="off">
                            </div>
                            <div>
                                <label for="stock" class="form-label mt-4">Stock</label>
                                <input type="number" class="form-control" id="stock" placeholder="stock" autocomplete="off">
                            </div>
                            <br>
                            <router-link :to="{ name: 'products.index' }" class="btn btn-primary">
                                Back
                            </router-link>
                            | 
                            <button type="submit" class="btn btn-success">Edit</button>
                        </fieldset>
                    </form>
                </div>    
        </div>
    </div>    
</template>
<script setup>
    import { ref } from 'vue'
    const props = defineProps(['id']);
    const productId = ref(props.id);
</script>