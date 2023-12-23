<template>
  <div class="group relative" v-for="product in data.data">
    <div
      class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
    >
      <img
        :src="product.thumbnail"
        alt="Front of men&#039;s Basic Tee in black."
        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <NuxtLink :to="`/product/${product.slug}`">
            <span aria-hidden="true" class="absolute inset-0"></span>
            {{ product.name }}
          </NuxtLink>
        </h3>
        <p class="mt-1 text-sm text-red-500">{{ product.category.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const { data } = props;
</script>
