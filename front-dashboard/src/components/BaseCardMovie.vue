<template>
  <div class="w-[280px] md:w-[320px] rounded shadow-lg">
    <img class="w-full" :src="displayPoster()" :alt="props.movieInfo.title">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 line-clamp-2 h-[56px]">{{ props.movieInfo.title }}</div>
      <p class="text-gray-700 text-base line-clamp-4 h-[96px]">
        {{ props.movieInfo.overview }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Movie } from '@/types/movies';
import { defineProps, withDefaults } from 'vue';

interface IProps {
  movieInfo: Movie;
}

// const props = withDefaults(defineProps<IProps>(), {
//   movieInfo: () => ({} as Movie),
// })

const props = defineProps<IProps>()

const displayPoster = () => `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.movieInfo.poster_path}`
</script>
