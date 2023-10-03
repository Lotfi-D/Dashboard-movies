import { TMovie } from '@/types/movies'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMovieStore = defineStore('movie', () => {
  const favoritesMovies = ref<TMovie[]>([])
   
  const displayFavoritesMovies = computed(() => favoritesMovies.value)

  function addToMyFavorites(movie: TMovie) {
    favoritesMovies.value.push(movie)
  }

  return { 
    favoritesMovies, 
    displayFavoritesMovies,
    addToMyFavorites,
  }
}, {persist: true})