<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Home Bee 🐝</NuxtLink>
                <ul class="flex gap-4">
                 <li><NuxtLink to="/" class="btn">Home</NuxtLink></li>
                 <li><NuxtLink to="/about">About</NuxtLink></li>
                 <li><NuxtLink to="/products">Products</NuxtLink></li>
                 <li><NuxtLink to="/contact" class="btn">Contact Us</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>


    </div>
</template>



<style scoped>
.router-link-exact-active{
    color: #a32a29;
}

html,body { margin: 0 !important;}
</style>