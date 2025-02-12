<template>
  <NuxtLoadingIndicator />
  <Navsearch />
  <NuxtPage />
  <Footer />
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const script = document.createElement('script');
  script.async = true;
  script.defer = true;
  script.src = 'https://tianji.comcitybd.net/tracker.js';
  script.dataset.websiteId = 'cm71gzg5c311savk8poskqtun';
  document.head.appendChild(script);
});
</script>