<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-20 mx-auto">
      <div class="flex flex-wrap -m-4 text-center">
        <div class="p-4 sm:w-1/4 w-1/2">
          <NuxtLink to="/category/casing">
            <img src="/case.webp" class="mx-auto hover:scale-110" />
          </NuxtLink>
          <p class="leading-relaxed">Case</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <NuxtLink to="/category/cooler-fan">
            <img src="/cooler.webp" class="mx-auto hover:scale-110" />
          </NuxtLink>
          <p class="leading-relaxed">Cooler Fan</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <NuxtLink to="/category/monitor">
            <img src="/monitor.webp" class="mx-auto hover:scale-110" />
          </NuxtLink>
          <p class="leading-relaxed">Monitor</p>
        </div>
        <div class="p-4 sm:w-1/4 w-1/2">
          <NuxtLink to="category/power-supply">
            <img src="/psu.webp" class="mx-auto hover:scale-110" />
          </NuxtLink>
          <p class="leading-relaxed">Power Supply</p>
        </div>
      </div>
    </div>
  </section>
</template>
