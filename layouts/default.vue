<template>
    <div>
        <header>
            <nav>
                <!-- <NuxtLink to="/">Home Bee</NuxtLink> -->
                <ul>
                 <li><NuxtLink to="/">Home</NuxtLink></li>
                 <li><NuxtLink to="/about">About</NuxtLink></li>
                 <li><NuxtLink to="/products">Products</NuxtLink></li>
                 <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div>
            <slot />
        </div>


    </div>
</template>



<style scoped>
.router-link-exact-active{
    color: #a32a29;
}
ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
    background-color: #a32a29;
}
html,body { margin: 0 !important;}
</style>