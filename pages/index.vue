<template>
  <div class="container mx-auto">
    <h3 class="text-center font-bold">Categories</h3>
    <div class="category">
      <ul class="flex gap-4 px-4">
        <li class="btn border rounded-md p-2 cursor-pointer" @click="selectedCat('All')">All</li>
        <li class="border rounded-md p-2 cursor-pointer" v-for="cat in selectedCategories" :key="cat.id" @click="selectedCat(cat.name)">{{ cat.name }}</li>
      </ul>

      <v-row gutters mt-3>
        <v-col>
          <v-autocomplete
            label="ZONES"
            :items="zones"
            v-model="selectedZone"
          ></v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            label="ACTIVITIES"
            :items="preferredActivity"
            item-text="name"
            v-model="selectedCategories"
          ></v-autocomplete>
        </v-col>
      </v-row>

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
import { ref, onMounted, watch } from 'vue';
import categoriesData from '~/static/categories.json';

const selectedCategory = ref('All');
const items = ref([]);
const categories = ref(categoriesData);
const selectedCategories = ref([]);
const selectedZone = ref('MEYDAN');
const zones = ref(['IFZA', 'MAINLAND', 'MEYDAN']);

onMounted(() => {
  fetchItemsInCat('All');
});

const fetchItemsInCat = async (cat) => {
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

const preferredActivity = ref([]);

watch(selectedZone, (newValue, oldValue) => {
  updatePreferredActivity(newValue);
});

const updatePreferredActivity = (zone) => {
  if (zone === 'IFZA') {
    preferredActivity.value = categories.value.filter(item => item.id === 2).map((item)=>item.name);
    console.log(preferredActivity.value);
  } else if (zone === 'MAINLAND') {
    preferredActivity.value = categories.value.filter(item => item.id === 3).map(item=>item.name);
  } else if (zone === 'MEYDAN') {
    preferredActivity.value = categories.value.filter(item => item.id === 4).map(item=>item.name);
  }
};

</script>

<style scoped>
li:hover {
  background-color: #a32a29;
  color: white;
}
</style>
