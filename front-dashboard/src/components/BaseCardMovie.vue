<template>
  <div class="rounded shadow-lg" :class="props.classProps">
    <img class="w-full" :src="displayPoster()" :alt="props.movieInfo.title">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 line-clamp-2 h-[56px]">{{ props.movieInfo.title }}</div>
      <p class="text-gray-700 text-sm mb-2">
        {{ releaseDateFormated() }}
      </p>
      <p class="text-sm overflow-hidden h-[96px]">
        {{ props.movieInfo.overview }}
      </p>
    </div>
    <ElScrollbar height="96px" :always="false">
      <div class="px-6 pt-4 pb-2 h-[96px]">
        <span 
          v-for="genreId in props.movieInfo.genre_ids" 
          :key="genreId" 
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {{ getGenreName(genreId) }}
        </span>
    </div>
  </ElScrollbar>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { TMovie, TGenre } from '@/types/movies';
import { genresInMdb } from '@/enum.json'
import { ElScrollbar } from 'element-plus';
import dayjs from 'dayjs';

interface IProps {
  movieInfo: TMovie,
  classProps: string
}

const props = defineProps<IProps>()

const displayPoster = () => `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.movieInfo.poster_path}`

const getGenreName = (genreId: number) => {
  const findGenre = genresInMdb.find((genre: TGenre) => genre.id === genreId)
  return findGenre?.name
}

const releaseDateFormated = () => dayjs(props.movieInfo.release_date).format('ddd MMM YYYY')
</script>
