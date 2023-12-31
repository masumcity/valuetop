<template>
  <!-- breadcrumb -->
  <Breadcrumb :data="data" />

  <!-- Product Details -->
  <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
    <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4 md:w-1/2">
          <div class="sticky top-0 z-50 overflow-hidden">
            <div class="relative mb-6 lg:mb-10 lg:h-2/4">
              <img :src="data.photo" :alt="data.name" class="object-cover w-full lg:h-full" />
            </div>
            <div class="flex-wrap hidden md:flex">
              <div class="w-1/2 p-2 sm:w-1/4" v-for="(photo, idx) in imgs" :key="idx" @click="() => show(idx)">
                <a href="#"
                  class="block border border-red-300 dark:border-transparent dark:hover:border-red-300 hover:border-red-300">
                  <img :src="photo.src" alt="" class="object-cover w-full lg:h-20" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2">
          <div class="lg:pl-20">
            <div class="mb-8">
              <span class="text-lg font-medium text-rose-500 dark:text-rose-200">{{ data.model }}</span>
              <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                {{ data.name }}
              </h2>

              <div class="max-w-md mb-8 text-gray-700 dark:text-gray-400" v-html="data.short"></div>
            </div>

            <div class="flex flex-wrap items-center -mx-4">
              <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">

                <a :href="`https://comcitybd.com/product/${data?.slug}`" target="_blank"
                  class="flex items-center justify-center w-full p-4 text-red-500 border border-red-500 rounded-md dark:text-gray-200 dark:border-red-600 hover:bg-red-600 hover:border-red-600 hover:text-gray-100 dark:bg-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:hover:text-gray-300">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Spec Tabs -->
  <Tab :data="data" />
  <client-only>
    <vue-easy-lightbox :visible="visible" :index="index" :imgs="imgs" @hide="visible = false" @on-prev="handlePrev"
      @on-next="handleNext" />
  </client-only>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data } = await useFetch(
  "https://admindash.comcitybd.com/api/product/" + slug
);

const imgs = await data.value.gallery;
const visible = ref(false);
const index = ref(0);
const mainimg = await data.photo;

const showsingle = function (idx) {
  index.value = idx;
  visible.value = true;
}

const show = function (idx) {
  index.value = idx;
  visible.value = true;
  console.log(index.value);
}

const handlePrev = function (oldIndex, newIndex) { }

const handleNext = function (oldIndex, newIndex) { }

</script>
