<template>
    <div>
<p>Product variables for {{id  }}</p>
<p>{{ product.title }}</p>
    </div>
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