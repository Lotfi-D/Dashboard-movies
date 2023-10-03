<template>
  <div v-loading="isLoading">
    <div>
      <h1 class="mb-1">My Favorites</h1>
      <ElInput
        v-model="filteredValue"
        class="w-[360px]"
        placeholder="Search"
      />
    </div>
    <div class="flex justify-center">
      <div v-if="favortesMoviesFiltered.length > 0" class="grid grid-cols-4 gap-4 mb-10 mt-5">
        <BaseCardMovie 
          v-for="(movie, index) in favortesMoviesFiltered"
          :key="index" 
          :movie-info="movie"
          :class-props="'w-[280px] md:w-[300px]'" 
          @deleteFavorite="reload"
        />
      </div>
      <div v-else class="absolute top-[50%]">
        No favorite found
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { ElInput } from 'element-plus'
import { useMovieStore } from '@/stores/movies'
import BaseCardMovie from '@/components/BaseCardMovie.vue'
import { TMovie } from '@/types/movies'

const filteredValue = ref<string>('')
const store = useMovieStore()
const { listFavoritesMovies } = storeToRefs(store)

const isLoading = ref<boolean>(false)

const favortesMoviesFiltered = computed(() => {
  const filteredValueLowerCase = filteredValue.value.toLowerCase()
  return listFavoritesMovies.value.filter((favorite: TMovie) =>
    favorite.title.toLowerCase().includes(filteredValueLowerCase)
  )
})

onMounted(() => {
  reload()
})

const reload = () => {
  isLoading.value = true
  setTimeout(() => { isLoading.value = false }, 500)
}
</script>
