<template>
  <div class="base-card-movie rounded shadow-lg" :class="props.classProps">
    <div class="container">
      <div class="flex justify-end">
        <BaseFavoriteButtonMovie :class-color="classColorButton" @select="addOrDeleteToFavorites" />
      </div>
      <img :src="displayPoster" :alt="props.movieInfo.title" class="w-full">
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 line-clamp-2 h-[56px]">{{ props.movieInfo.title }}</div>
      <p class="flex justify-between items-center">
        <span class="font-bold text-sm mb-2">{{ releaseDateFormated }}</span>
        <ElProgress 
          :percentage="averageInPercentage" 
          :color="colors"
          :width="40"
          type="circle"
        />
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
import { defineProps, defineEmits, computed, ref } from 'vue';
import BaseFavoriteButtonMovie from './BaseFavoriteButtonMovie.vue'
import { TMovie, TGenre } from '@/types/movies';
import { genresInMdb } from '@/enum.json'
import { ElScrollbar, ElProgress } from 'element-plus';
import dayjs from 'dayjs';
import { storeToRefs } from 'pinia'
import { useMovieStore } from '@/stores/movies'

interface IProps {
  movieInfo: TMovie,
  classProps: string
}

interface Color {
  color: string,
  percentage: number
}

const props = defineProps<IProps>()

const emit = defineEmits(['deleteFavorite'])

const store = useMovieStore()
const { listFavoritesMovies } = storeToRefs(store)
const { addToMyFavorites, deleteFromMyFavorites } = store

const colors = ref<Color[]>([
  { color: '#f56c6c', percentage: 50 }, //red under 20
  { color: '#e6a23c', percentage: 65 }, //orange under 65
  { color: '#f0e68c', percentage: 80 }, //yellow under 80
  { color: '#5cb87a', percentage: 100 }, //green under 100
])

const isFavorite = computed(() => {
  const idsFavoritesMovies = listFavoritesMovies.value.map((movie: TMovie) => movie.id)
  return idsFavoritesMovies.includes(props.movieInfo.id)
})

const classColorButton = computed(() => isFavorite.value ? 'text-red-600' : 'text-white')

const releaseDateFormated = computed(() => dayjs(props.movieInfo.release_date).format('ddd MMM YYYY'))

const displayPoster = computed(() => 
  `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.movieInfo.poster_path}`
)

const averageInPercentage = computed(() => {
  if (props.movieInfo.vote_average) {
    return Math.round((props.movieInfo.vote_average / 10) * 100)
  } return 0
})

const getGenreName = (genreId: number) => {
  const findGenre = genresInMdb.find((genre: TGenre) => genre.id === genreId)
  return findGenre?.name
}

const addOrDeleteToFavorites = () => {
  if (props.movieInfo.id) {
    if (isFavorite.value) {
      deleteFromMyFavorites(props.movieInfo.id)
      emit('deleteFavorite')
    } else {
      addToMyFavorites(props.movieInfo)
    }
  }
}
</script>

<style lang="scss">
.base-card-movie {
  .container {
    .btn-favorite {
      position: absolute;
      font-size: 16px;
    }
  }
  .el-progress__text {
    font-size: 13px !important;
  }
}
</style>
