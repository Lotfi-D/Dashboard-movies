<template>
  <div v-loading="isLoading">
    <div class="">
      <div 
        class="relative h-screen bg-cover bg-center" 
        :style="`background-image: url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movieHeroBanner.poster_path}); height: 700px;`">
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="absolute inset-0 flex items-center justify-center text-white">
        <h1 class="text-4xl font-semibold">Bienvenue sur Netflix</h1>
      </div>
    </div>
    </div>
    <div class="container mx-auto mt-6">
      <h2 class="text-2xl font-semibold">Trending</h2>
      <div class="flex flex-col md:flex-row md:items-start justify-center gap-4 items-center mt-5 mb-5">
        <BaseCardMovie v-for="(movie) in moviesDisplayed" :key="movie.id" :movie-info="movie" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import BaseCardMovie from '@/components/BaseCardMovie.vue'
import { moviesService } from '@/services'
import { Movie } from '@/types/movies'
import { ElNotification } from 'element-plus'

const moviesDisplayed = ref<Movie[]>([])
const movieHeroBanner = ref<Movie>({
  id: null,
  title: '',
  overview: '',
  poster_path: '',
  release_date: '',
  popularity: null,
  vote_average: null,
})
const isLoading = ref<boolean>(false)

onMounted(async () => {
  getTrendMovies()
})

//This function will help to select 4 trending movies to display randomly
//we want a number between 0 and 19 (include) to select the movies among the first page of the response API
const getRandomNumber= () => {
  return Math.floor(Math.random() * 20);
}

//the function generates a random index to display randomly a movie from the response API and it also checks
//if the movie is already displayed, in this case we relaunch the function to avoid displaying the same movie
const checkAndAddMovies = (response: any) => {
    const index = getRandomNumber()
    const moviesDisplayedId = moviesDisplayed.value.map((movie: Movie) => movie.id)
    if (!moviesDisplayedId.includes(response.data.results[index].id)) {
      moviesDisplayed.value.push(response.data.results[index])
    } else {
      checkAndAddMovies(response)
    }
}

const getTrendMovies = async () => {
  try {
    isLoading.value = true
    const response: any = await moviesService.fetchTrendMovies()
    console.log('response', response)
    for (let i = 0; i < 4; i++) {
      checkAndAddMovies(response)
    }
    movieHeroBanner.value = response.data.results[1]

    console.log('EEEEEEEEEEe', movieHeroBanner.value)
  } catch (error) {
    console.error(error)
    ElNotification({ title: 'Error', message: 'An error occur', type: 'error', duration: 5000, })
  } finally {
    setTimeout(() => isLoading.value = false, 500)
  }
}

</script>
