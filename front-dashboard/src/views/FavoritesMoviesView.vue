<template>
  <div v-loading="isLoading" class="">
    <div class="grid grid-cols-4 gap-4 mb-10 mt-5">
      <BaseCardMovie v-for="(movie, index) in displayFavoritesMovies" :key="index" :movie-info="movie" :class-props="'w-[280px] md:w-[300px]'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMovieStore } from '@/stores/movies'
import BaseCardMovie from '@/components/BaseCardMovie.vue'

const store = useMovieStore()
const { displayFavoritesMovies } = storeToRefs(store)

const isLoading = ref<boolean>(false)
</script>