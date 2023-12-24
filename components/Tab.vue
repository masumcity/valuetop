<template>
  <div class="pb-16">
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700 container mx-auto">
      <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab"
        data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2" role="presentation">
          <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile"
            type="button" role="tab" aria-controls="profile" aria-selected="false">
            Description
          </button>
        </li>
        <li class="me-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard"
            aria-selected="false">
            Video
          </button>
        </li>
        <li class="me-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings"
            aria-selected="false">
            Download
          </button>
        </li>
        <li role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts"
            aria-selected="false">
            Specification
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
          another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto" id="dashboard" role="tabpanel"
        aria-labelledby="dashboard-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto" id="settings" role="tabpanel"
        aria-labelledby="settings-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white">Settings tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 container mx-auto" id="contacts" role="tabpanel"
        aria-labelledby="contacts-tab">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</strong>. Clicking
          another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>