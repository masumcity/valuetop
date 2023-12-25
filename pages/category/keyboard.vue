<template>
  <div class="bg-white">
    <Breadcrumb />
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        {{ data.data[0].category.name }}
      </h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <ProductPod :data="data" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch(
  "https://admindash.comcitybd.com/api/brands/Value-Top/100?id[]=96"
);
</script>
