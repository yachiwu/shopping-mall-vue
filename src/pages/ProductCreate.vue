<template>
    <div class="container">
        <h2 class="text-center mt-3">Create Product</h2>
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
                        <label for="imageUrl" class="form-label mt-4">Image Url</label>
                        <input type="text" class="form-control" id="imageUrl" placeholder="imageUrl" autocomplete="off">
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
                    <button type="submit" class="btn btn-success">Create</button>
                </fieldset>
            </form>
    </div>
</template>