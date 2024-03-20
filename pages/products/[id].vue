<template>
    <div>
<p>Product variables for {{id  }}</p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
     Eum, saepe qui sit illo dolores numquam atque hic repudiandae 
     molestiae culpa provident repellat quod? Nostrum ullam sapiente
      quidem provident blanditiis odit!</p>
    </div>
</template>

<script setup>

const {id} = useRoute().params
definePageMeta({
    layout: 'products'
})

</script>

<style lang="scss" scoped>

</style>