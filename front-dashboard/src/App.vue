<template>
  <div class="flex flex-col h-screen">
    <TheHeader class="w-full" />
    <main class="flex-grow">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from './layout/TheHeader.vue';
</script>
