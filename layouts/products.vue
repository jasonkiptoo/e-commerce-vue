<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto flex justify-end">
                <NuxtLink to="/products"> Bee Merch</NuxtLink>
            </nav>
        </header>
        
        <div>
            <slot />
        </div>

        <footer>
            <ul class="container flex mx-auto gap-4 justify-end">
                 <li><NuxtLink to="/">Home</NuxtLink></li>
                 <li><NuxtLink to="/about">About</NuxtLink></li>
                 <li><NuxtLink to="/products">Products</NuxtLink></li>
                 <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                </ul>
        </footer>


    </div>
</template>



<style scoped>
.router-link-exact-active{
    color: #a32a29;
}

html,body { margin: 0 !important;}
</style>