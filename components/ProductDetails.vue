<template>
<div class="container">
    <button class="btn">
                <i class="material-icons mr-2 ">arrow_back</i>
        <span class="text-dark">Go Back</span>

    </button>
</div>

   <div class="card">
    <div class="grid grid-cols-2 gap-10">
        <div class="p-7">
            <img :src="product.image"  alt="product img" class="mx-auto my-7">
        </div>  

        <div class="py-7">
            <h2 class="text-4xl my-7">{{ product.title }}</h2>
            <p class="text-xl my-7">Price -${{ product.price }}</p>
            <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
            <p class="text-xm">{{ product.description }}</p>
            <button class="btn flex mt-4">
                <i class="material-icons mr-2">add_shopping_cart</i>
                <span>add to cart</span>
            </button>
        </div>
    </div>
   </div>
</template>

<script setup>
const {product}= defineProps(['product'])
</script>

<style scoped>
img{
    max-width: 400px;
}

</style>