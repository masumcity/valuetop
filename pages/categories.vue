<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">All Value-Top Product Categories</h1>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <NuxtLink :to="category.url" v-for="category in categories" :key="category.name" class="border-2 rounded-xl bg-gray-100 hover:bg-gray-800 hover:text-white">
          <h3 class="text-center text-2xl">{{ category.name }}</h3>
          <img class="h-auto max-w-full rounded-lg hover:-scale-x-100" :src="category.img" :alt="category.name">
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    "name": "Casing",
    "img": "/casing.jpg",
    "url": "/category/casing"
  },
  {
    "name": "Monitor",
    "img": "/monitor.jpg",
    "url": "/category/monitor"
  },
  {
    "name": "Power Supply",
    "img": "/powersupply.jpg",
    "url": "/category/power-supply"
  },
  {
    "name": "Cooler Fan",
    "img": "/cooling.jpg",
    "url": "/category/cooler-fan"
  },
  {
    "name": "Keyboard",
    "img": "/keyboard.jpg",
    "url": "/category/keyboard"
  },
  {
    "name": "Wired Mouse",
    "img": "wiredmouse.jpg",
    "url": "/category/wired-mouse"
  },
  {
    "name": "Wireless Mouse",
    "img": "wirelessmouse.jpg",
    "url": "/category/wireless-mouse"
  }
];
</script>