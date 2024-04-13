<template>
    <div class="container">
      <h2 class="text-center mt-3">Create Product</h2>
      <form @submit.prevent="submitForm">
        <fieldset>
          <div>
            <label for="productName" class="form-label mt-4">Product Name</label>
            <input type="text" class="form-control" id="productName" placeholder="productName" autocomplete="off" v-model="productForm.productName" required>
          </div>
          <div>
            <label for="category" class="form-label mt-4">Category</label>
            <select class="form-select" id="category" v-model="productForm.category" required>
              <option value="">Select a category</option>
              <option value="FOOD">FOOD</option>
              <option value="CAR">CAR</option>
              <option value="Dogs">Dogs</option>
              <option value="Cats">Cats</option>
              <option value="E_BOOK">E_BOOK</option>
            </select>
          </div>
          <div>
            <label for="imageUrl" class="form-label mt-4">Image Url</label>
            <input type="text" class="form-control" id="imageUrl" placeholder="imageUrl" autocomplete="off" v-model="productForm.imageUrl" required>
          </div>
          <div>
            <label for="price" class="form-label mt-4">Price</label>
            <input type="number" class="form-control" id="price" placeholder="price" autocomplete="off" v-model="productForm.price" required>
          </div>
          <div>
            <label for="stock" class="form-label mt-4">Stock</label>
            <input type="number" class="form-control" id="stock" placeholder="stock" autocomplete="off" v-model="productForm.stock" required>
          </div>
          <br>
          <router-link :to="{ name: 'products.index' }" class="btn btn-primary">Back</router-link> | 
          <button type="submit" class="btn btn-success">Create</button>
        </fieldset>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useStore } from 'vuex'
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  
  const store = useStore();
  const router = useRouter();
  
  const productForm = reactive({
    productName: "",
    category: "",
    imageUrl: "",
    price: "",
    stock: ""
  });
  console.log(productForm);
  const submitForm = async () => {
    try {
      await store.dispatch('newProduct', productForm);
      router.push({ name: 'products.index' });
      // Redirect or handle success
    } catch (error) {
      console.error('Error while creating product:', error);
      // Handle error
    }
  };
  </script>
