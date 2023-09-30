<template>
  <container class="flex flex-col">
    <TheHeader />
    <main>
      <router-view />
    </main>
  </container>
</template>

<script lang="ts" setup>
import TheHeader from './layout/TheHeader.vue';
</script>
