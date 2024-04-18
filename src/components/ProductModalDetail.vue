<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-outline-info me-2 mb-2 mb-md-0" data-bs-toggle="modal" data-bs-target="#targetModal" @click="handleShowMore">
        More
    </button>
    <!-- Modal -->
    <div class="modal fade" id="targetModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" v-if="product">
                <div class="modal-header d-flex justify-content-between align-items-center">
                    <h5 class="modal-title" >{{ product.productName }}</h5>
                    <span class="badge rounded-pill bg-primary ms-2">{{ product.category }}</span>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex justify-content-center align-items-center flex-column">
                    <img :src="product.imageUrl" alt="" style="max-width: 80%; max-height: 80%;"/>
                    <ul class="list-group w-100 mt-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span>Product Description:</span>
                            <span>{{ product.description }}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span>Product Price:</span>
                            <span>${{ product.price}}</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <span>Product Stock:</span>
                            <span>{{ product.stock}}</span>
                        </li>
                    </ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from "vue";
    import { useStore } from "vuex";

    const store = useStore();
    const product = computed(() => store.getters.productDetails);
    const emit = defineEmits(['showMore'])

    const handleShowMore = () => {
        emit('showMore');
        console.log(product);
    }
</script>


