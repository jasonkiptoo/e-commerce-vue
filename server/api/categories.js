export default defineEventHandler(async(event)=>{



// const uri ='https://fakestoreapi.com/products/categories'

    const categories = await $fetch('https://fakestoreapi.com/products/categories')
    console.log(categories);


    return categories
})


