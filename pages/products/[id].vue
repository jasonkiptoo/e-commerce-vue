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

</script>

<style lang="scss" scoped>

</style>