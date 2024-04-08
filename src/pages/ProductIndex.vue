<template>
    <div class="container" mt-2>
        <h2 class="mt-3">Product List</h2>
        <router-link :to="{ name: 'products.create' }" class="btn btn-outline-primary mb-2" role="button">
            Create Product
        </router-link>
        
        <div class="row">
          <ProductCard v-for="product in productList" :product="product" :key="product.id" />
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import ProductCard from "../components/ProductCard.vue"
    
    const productList = ref([
      { ProductId: 1, ProductName: "Donna 體控&低敏犬糧15KG",category:"Dogs",
        imageUrl:"https://img.pchome.com.tw/cs/items/DXBG7RA900HAQI3/000001_1710145116.jpg",price:664,
        stock:10, description:"聰明絕佳選擇 嚴格安全生產流程 無法抗拒美味口感" },
      { ProductId: 2, ProductName: "Cesar西莎精緻/風味餐盒 100g*24入 ",category:"Dogs",
        imageUrl:"https://img.pchome.com.tw/cs/items/DXBG6LA900GJ580/000001_1709616905.jpg",price:899,
        stock:10, description:"澳洲原裝進口優質鮮肉 每口都是享受 營養完整均衡 健康低熱量" },
      { ProductId: 3, ProductName: "喵洽普 貓咪凍乾零食-鮭魚 70g",category:"Cats",
        imageUrl:"https://img.pchome.com.tw/cs/items/DXBG27A900ANS7N/000001_1704250831.jpg",price:270,
        stock:10, description:"鮭魚#富含Omega-3 DHA、維生素ABED 貓咪最愛" },
      { ProductId: 4, ProductName: "藤澤-迷你小起司 15g -愛貓",category:"Cats",
        imageUrl:"https://img.pchome.com.tw/cs/items/DEBV62A900H4OOZ/000001_1706681483.jpg",price:546,
        stock:10, description:"香濃的起司口味 激起貓兒的食慾 香脆爽口的小骰子大小，方便餵" },
      { ProductId: 5, ProductName: "Kitcat小鮮肉系列-鮪魚柳條、纖維素(化毛配方) 30g",category:"Cats",
        imageUrl:"https://img.pchome.com.tw/cs/items/DXBG27A900AJR50/000001_1583914573.jpg",price:23,
        stock:10, description:"無穀配方低敏低脂 健康又美味 添加歐美加照顧貓咪皮毛健康" },
      { ProductId: 6, ProductName: "鮪魚鮭魚佐蔓越莓 12gx4 (1包)",category:"Cats",
        imageUrl:"https://img.pchome.com.tw/cs/items/DEBVHPA900FMJAO/000001_1698850622.jpg",price:55,
        stock:10, description:"新鮮雞肉，添加超級食物 添加牛磺酸，補充貓咪必須胺基酸 (需藉由飲食補充)添加果寡糖，有助於腸道益菌生長，促進消化與腸道健康。" },
    ])
</script>
<style scoped>
</style>