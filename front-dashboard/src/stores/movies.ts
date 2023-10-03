import { TMovie } from '@/types/movies'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  //state
  const favoritesMovies = ref<TMovie[]>([])

  //getters
  const displayFavoritesMovies = computed(() => favoritesMovies.value)

  //actions
  function addToMyFavorites(movie: TMovie) {
    favoritesMovies.value.push(movie)
  } 

  return { 
    favoritesMovies, 
    displayFavoritesMovies,
    addToMyFavorites 
  }
})