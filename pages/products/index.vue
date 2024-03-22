<template>
    <div class="grid grid-cols-4 gap-5">
        <div  v-for="p in products">
              <ProductCard :product="p"/>
        </div>
        
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'products'
})


// fecth products
const {data:products} = await useFetch('https://fakestoreapi.com/products')

console.log(products)

useHead({
    title: 'Bee Shop Products',
    name: 'Product Details '
})

</script>

<style scoped>
</style>