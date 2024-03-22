<template>
    <div class="container">
        <h2>About us</h2>
        <p>{{data}}</p>
    </div>
</template>

<script setup>

const { data    }=await useFetch('/api/bee?name=bee')

</script>

<style scoped>

</style>