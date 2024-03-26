<template>
  <div class="container mx-auto">
    <h3 class="text-center font-bold">Categories</h3>
    <div class="category">
      <ul class="flex gap-4 px-4">
        <li class="btn border rounded-md p-2 cursor-pointer" @click="selectedCat('All')">All</li>
        <li class="border rounded-md p-2 cursor-pointer" v-for="cat in categories" :key="cat.id" @click="selectedCat(cat.name)">{{ cat.name }}</li>
      </ul>
    </div>
    <h3 class="font-bold text-center">
      {{ selectedCategory }} Items
    </h3>
    <div class="container ml-8 grid grid-cols-4 gap-4 mt-8">
      <div class="c" v-for="product in items" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import categoriesData from '~/static/categories.json';

const selectedCategory = ref('All');
const items = ref([]);
const categories = ref(categoriesData);

onMounted(()=>{
  fetchItemsInCat('All');

  console.log(categoriesData, "data");
})

// const fetchCategories = async () => {
//   try {
//     const response = await fetch('/api/categories');
//     const data = await response.json();
//     categories.value = data;
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//   }
// };

const fetchItemsInCat = async (cat) => {
  console.log(cat, "tis my cat");

  if (cat === 'All') {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      items.value = data;
      selectedCategory.value = cat;
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  } else {

    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${cat}`);
      const data = await response.json();
      items.value = data;
      selectedCategory.value = cat;
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }
};

const selectedCat = (cat) => {
  if (cat === 'All') {
    fetchItemsInCat('All');
  } else {
    fetchItemsInCat(cat);
  }
};

onMounted(() => {
  // fetchCategories();
});
</script>

<style scoped>
li:hover {
  background-color: #a32a29;
  color: white;
}
</style>
