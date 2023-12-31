<template>
  <div class="bg-white">
    <Breadcrumb />
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 capitalize">
        {{ route.query.q }}
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div class="group relative" v-for="product in result?.hits">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="product.thumbnail"
              :alt="product.name"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <NuxtLink :to="`/category/product/${product.slug}`">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ product.name }}
                </NuxtLink>
              </h3>
              <p class="mt-1 text-sm text-red-500">{{ product.brands }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const { search, result } = useMeiliSearch("products");
onMounted(async () => {
  await console.log(route.query.q);
  await search("value-top " + route.query.q);
});
</script>
