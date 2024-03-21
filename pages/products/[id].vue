<template>
    <ProductDetails :product="product"/>
</template>

<script setup>

const {id} = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id 
definePageMeta({
    layout: 'products'
})

const {data: product} = useFetch(uri)


if(!product.value){
    throw createError({
        statusCode: 404,
        message:` Product not found with id: ${id} `
    });
}

</script>

<style lang="scss" scoped>

</style>