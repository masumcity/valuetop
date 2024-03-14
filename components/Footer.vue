<template>
  <footer class="bg-black">
    <div class="mx-auto container p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="https://www.valuetop.com.bd/" class="flex items-center">
            <img src="/logo-f-b.png" class="h-8 me-3" alt="Value-Top Logo" />
          </a>
          <p class="mt-6 text-sm font-semibold text-white">
            Manufacturer Of Best Computer Accessories In Bangladesh. We are your
            most reliable partner.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white">Resources</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <NuxtLink to="/" class="hover:underline text-white">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/company" class="hover:underline text-white">
                  Company
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white">Follow us</h2>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <a
                  href="https://www.facebook.com/valuetop.cctl/"
                  class="hover:underline text-white"
                  >Facebook</a
                >
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=37Sgh5Be09Q&list=PLdpSmkPlA7T9t5p6PPbAzUI-g72mdte2x&ab_channel=ComputerCityTechnologiesLtd."
                  class="hover:underline text-white"
                  >Youtube</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-white uppercase">
              Legal
            </h2>
            <ul class="text-white font-medium">
              <li class="mb-4">
                <NuxtLink to="/privacy" class="hover:underline text-white"
                  >Privacy Policy</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/terms" class="hover:underline text-white"
                  >Terms &amp; Conditions</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm sm:text-center text-white"
          >© 2023
          <a href="https://valuetop.com.bd/" class="hover:underline">
            Value-Top™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
