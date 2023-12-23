<template>
  <!-- breadcrumb -->
  <div class="container mx-auto pt-24">
    <ol class="flex items-center whitespace-nowrap" aria-label="Breadcrumb">
      <li class="inline-flex items-center">
        <a class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
          href="#">
          Home
        </a>
        <svg class="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </li>
      <li class="inline-flex items-center">
        <a class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
          href="#">
          Product
          <svg class="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </li>
      <li class="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
        aria-current="page">
        {{ slug }}
      </li>
    </ol>
  </div>

  <!-- Product Details -->
  <section class="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
    <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4 md:w-1/2">
          <div class="sticky top-0 z-50 overflow-hidden">
            <div class="relative mb-6 lg:mb-10 lg:h-2/4">
              <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                class="object-cover w-full lg:h-full" />
            </div>
            <div class="flex-wrap hidden md:flex">
              <div class="w-1/2 p-2 sm:w-1/4">
                <a href="#"
                  class="block border border-red-300 dark:border-transparent dark:hover:border-red-300 hover:border-red-300">
                  <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                    class="object-cover w-full lg:h-20" />
                </a>
              </div>
              <div class="w-1/2 p-2 sm:w-1/4">
                <a href="#"
                  class="block border border-transparent dark:border-transparent dark:hover:border-red-300 hover:border-red-300">
                  <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                    class="object-cover w-full lg:h-20" />
                </a>
              </div>
              <div class="w-1/2 p-2 sm:w-1/4">
                <a href="#"
                  class="block border border-transparent dark:border-transparent dark:hover:border-red-300 hover:border-red-300">
                  <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                    class="object-cover w-full lg:h-20" />
                </a>
              </div>
              <div class="w-1/2 p-2 sm:w-1/4">
                <a href="#"
                  class="block border border-transparent dark:border-transparent dark:hover:border-red-300 hover:border-red-300">
                  <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                    class="object-cover w-full lg:h-20" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2">
          <div class="lg:pl-20">
            <div class="mb-8">
              <span class="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
              <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                {{ slug }}
              </h2>
              <div class="flex items-center mb-6">
                <ul class="flex mr-2">
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
                        <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
                        <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
                        <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star" viewBox="0 0 16 16">
                        <path
                          d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                    </a>
                  </li>
                </ul>
                <p class="text-xs dark:text-gray-400">(2 customer reviews)</p>
              </div>
              <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet
                Lorem ispum dor amet Lorem ispum dor amet
              </p>
              <p class="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400">
                <span>$1000.99</span>
                <span class="text-base font-normal text-gray-500 line-through dark:text-gray-400">$1500.99</span>
              </p>
              <p class="text-green-600 dark:text-green-300">7 in stock</p>
            </div>
            <div class="flex items-center mb-8">
              <h2 class="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                Colors:
              </h2>
              <div class="flex flex-wrap -mx-2 -mb-2">
                <button
                  class="p-1 mb-2 mr-2 border border-transparent hover:border-red-400 dark:border-gray-800 dark:hover:border-gray-400">
                  <div class="w-6 h-6 bg-red-300"></div>
                </button>
                <button
                  class="p-1 mb-2 mr-2 border border-transparent hover:border-red-400 dark:border-gray-800 dark:hover:border-gray-400">
                  <div class="w-6 h-6 bg-green-300"></div>
                </button>
                <button
                  class="p-1 mb-2 border border-transparent hover:border-red-400 dark:border-gray-800 dark:hover:border-gray-400">
                  <div class="w-6 h-6 bg-red-200"></div>
                </button>
              </div>
            </div>
            <div class="flex items-center mb-8">
              <h2 class="w-16 text-xl font-bold dark:text-gray-400">Size:</h2>
              <div class="flex flex-wrap -mx-2 -mb-2">
                <button
                  class="py-1 mb-2 mr-1 border w-11 hover:border-red-400 dark:border-gray-400 hover:text-red-600 dark:hover:border-gray-300 dark:text-gray-400">
                  XL
                </button>
                <button
                  class="py-1 mb-2 mr-1 border w-11 hover:border-red-400 hover:text-red-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                  S
                </button>
                <button
                  class="py-1 mb-2 mr-1 border w-11 hover:border-red-400 hover:text-red-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                  M
                </button>
                <button
                  class="py-1 mb-2 mr-1 border w-11 hover:border-red-400 hover:text-red-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                  XS
                </button>
              </div>
            </div>
            <div class="w-32 mb-8">
              <label for="" class="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
              <div class="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                <button
                  class="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                  <span class="m-auto text-2xl font-thin">-</span>
                </button>
                <input type="number"
                  class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                  placeholder="1" />
                <button
                  class="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                  <span class="m-auto text-2xl font-thin">+</span>
                </button>
              </div>
            </div>
            <div class="flex flex-wrap items-center -mx-4">
              <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                <button
                  class="flex items-center justify-center w-full p-4 text-red-500 border border-red-500 rounded-md dark:text-gray-200 dark:border-red-600 hover:bg-red-600 hover:border-red-600 hover:text-gray-100 dark:bg-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:hover:text-gray-300">
                  Add to Cart
                </button>
              </div>
              <div class="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                <button
                  class="flex items-center justify-center w-full p-4 text-red-500 border border-red-500 rounded-md dark:text-gray-200 dark:border-red-600 hover:bg-red-600 hover:border-red-600 hover:text-gray-100 dark:bg-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:hover:text-gray-300">
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Spec Tabs -->
  <div class="pb-16">
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700 container mx-auto">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
        data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2" role="presentation">
          <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile"
            type="button" role="tab" aria-controls="profile" aria-selected="false">
            Profile
          </button>
        </li>
        <li class="me-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard"
            aria-selected="false">
            Dashboard
          </button>
        </li>
        <li class="me-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings"
            aria-selected="false">
            Settings
          </button>
        </li>
        <li role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts"
            aria-selected="false">
            Contacts
          </button>
        </li>
      </ul>
    </div>
    <div id="default-tab-content">
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto" id="profile" role="tabpanel"
        aria-labelledby="profile-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white">Profile tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for
          the next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto" id="dashboard" role="tabpanel"
        aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for
          the next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto" id="settings" role="tabpanel"
        aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for
          the next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto" id="contacts" role="tabpanel"
        aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for
          the next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
    </div>
  </div>
</template>


<script setup>
const route = useRoute();
const slug = route.params.slug;
</script>
