<template>
  <nav class="bg-black dark:bg-gray-900 border-b border-gray-600">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 container mx-auto"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/logo_w.png" class="h-8" alt="Flowbite Logo" />
      </NuxtLink>

      <div class="flex md:order-2">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
        <div class="relative hidden md:block">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <button
          data-collapse-toggle="navbar-search"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-search"
      >
        <div class="relative mt-3 md:hidden">
          <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
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
              @click="showMenu"
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
            <!-- MegaMenu -->
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
                    <NuxtLink
                      to="/category/monitor"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Monitor
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/category/power-supply"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Power Supply
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/category/cooler-fan"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Cooling
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="p-4 pb-0 text-gray-900 md:pb-4 font-bold uppercase">
                <ul class="space-y-4">
                  <li>
                    <NuxtLink
                      to="/category/keyboard"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Keyboard
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/category/wired-mouse"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Wired Mouse
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink
                      to="/category/wireless-mouse"
                      class="text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-blue-500"
                    >
                      Wireless Mouse
                    </NuxtLink>
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
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
