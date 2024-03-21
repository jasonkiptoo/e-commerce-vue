<template>
    <div>
        <header class="shadow-sm bg-white">
            
            <nav class=" pt-8 justify-end w-full p-4 flex gap-2 bg-white" >
            <!-- <nav class="fixed p-4  " > -->
                <NuxtLink  to="/products"> Bee Merch</NuxtLink>
                <ul class="container flex mx-auto gap-4 justify-end">
                 <li><NuxtLink to="/">Home</NuxtLink></li>
                 <li><NuxtLink to="/about">About</NuxtLink></li>
                 <li><NuxtLink to="/products">Products</NuxtLink></li>
                 <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                </ul>


            </nav>
        </header>
        
        <div class="container mx-auto my-8" >
            <slot />
        </div>

    </div>
</template>



<style scoped>
.router-link-exact-active{
    color: #a32a29;
}
</style>