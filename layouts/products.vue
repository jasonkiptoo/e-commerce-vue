<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto flex justify-end gap-2">
                <NuxtLink to="/products"> Bee Merch</NuxtLink>
                <NuxtLink to="/products">
                    
                    <div class="btn-car">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
</svg>

                    </div>
                </NuxtLink>
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