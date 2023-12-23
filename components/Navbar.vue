<template>
  <nav class="bg-black dark:bg-gray-900 border-b border-gray-600">
    <div
      class="flex flex-wrap items-center justify-between container mx-auto px-4 py-8"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/logo_w.png" class="h-8" alt="Flowbite Logo" />
      </NuxtLink>

      <div
        class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse justify-center"
      >
        <div>
          <div class="">
            <div class="relative flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
            </div>
          </div>
        </div>
        <img src="/search.png" class="h-8" />

        >
      </div>
      <div
        id="mega-menu"
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse"
        >
          <li>
            <NuxtLink
              to="/"
              class="block py-2 px-3 text-white font-bold uppercase"
              aria-current="page"
              >Home</NuxtLink
            >
          </li>
          <li>
            <button
              id="mega-menu-dropdown-button"
              data-dropdown-toggle="mega-menu-dropdown"
              class="flex items-center justify-between w-full py-2 px-3 text-white font-bold uppercase"
            >
              Product
              <svg
                class="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="mega-menu-dropdown"
              class="absolute z-30 grid hidden w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700"
            >
              <div class="p-4 pb-0 font-bold uppercase md:pb-4">
                <ul
                  class="space-y-4"
                  aria-labelledby="mega-menu-dropdown-button"
                >
                  <li>
                    <NuxtLink
                      to="/category/casing"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Casing
                    </NuxtLink>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Monitor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Power Supply
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Cooling
                    </a>
                  </li>
                </ul>
              </div>
              <div class="p-4 pb-0 text-gray-900 md:pb-4 font-bold uppercase">
                <ul class="space-y-4">
                  <li>
                    <a
                      href="#"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Keyboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Mouse
                    </a>
                  </li>
                </ul>
              </div>
              <div class="p-4"></div>
            </div>
          </li>
          <li>
            <NuxtLink
              to="/company"
              class="block py-2 px-3 text-white font-bold uppercase"
              >Company
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/resource"
              class="block py-2 px-3 text-white font-bold uppercase"
              >Resource</NuxtLink
            >
          </li>

          <li>
            <NuxtLink
              to="/contact"
              class="block py-2 px-3 text-white font-bold uppercase"
              >Contact</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
