<template>
    <Head>
        <Title>
           <!-- Bee Shop {{ product['title'] }} -->
        </Title>
        <!-- <Meta name="description"   :content="product['description']" /> -->
    </Head>
    <ProductDetails :product="product"/>
</template>

<script setup>

const {id} = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id 
definePageMeta({
    layout: 'products'
})

const {data: product} = useFetch(uri)
console.log(product);

if(!product.value){
    throw createError({
        statusCode: 404,
        message:` Product not found with id: ${id} `,
        fatal:true
    });
}
useHead({
    title: product.title,
    meta:[{content:product.description,name:product.title}]
})

</script>

<style lang="scss" scoped>

</style>