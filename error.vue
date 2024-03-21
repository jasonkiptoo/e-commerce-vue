<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="ooops">
            Ooops!
        </p>
        <p class="mt-7">
            {{error.message}}
        </p>

        <div class="btn my-7" @click="handleError()">...Go Home</div>

    </div>
</template>

<script setup>
defineProps(['error'])

const handleError=()=>{
    clearError({redirect:'/products'})
}
</script>

<style  scoped>

</style>