<template>
    <div class="container  mx-6">
        <h2 class="font-bold text-center text-4xl">About us</h2>
        <p class="text-2xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quidem nesciunt reiciendis, perferendis, labore aut exercitationem, omnis mollitia corrupti aliquam placeat similique fugiat tenetur praesentium. Delectus voluptas cupiditate sed blanditiis.</p>
       
        <p class="grid grid-cols-4" >
            <p v-for="curr in data">
                {{curr.code}} @ {{ curr.value }}
            </p>
        </p>
    </div>
</template>

<script setup>

const { data    }=await useFetch('/api/bee', {
    method: 'post',
    body: {age:26}
})

</script>

<style scoped>


</style>