<template>
  <div v-loading="isLoading" class="list-page">
    <BaseTabsMovie :tabs-info="tabsToDisplay" @change-tab="getMoviesByGenre">
      <div class="grid grid-cols-4 gap-4 mb-5">
        <BaseCardMovie v-for="(movie, index) in listMoviesByGenre" :key="index" :movie-info="movie" :class-props="'w-[280px] md:w-[300px]'" />
      </div>
    </BaseTabsMovie>
    <div class="flex justify-center">
      <button class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-2xl w-[50%] mb-5" @click="loadMoreMovies">
        Load more
      </button>
    </div>
  </div>
  <!-- ajout qqes chose en haut? -->
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { moviesService } from '@/services'
import BaseTabsMovie from '@/components/BaseTabsMovie.vue'
import BaseCardMovie from '@/components/BaseCardMovie.vue'
import { TMovie, TGenre } from '@/types/movies';
import { genreInApp } from '@/enum.json'
import { ElNotification } from 'element-plus';

const tabsToDisplay = ref<TGenre[]>(genreInApp)
const listMoviesByGenre = ref<TMovie[]>([])
const currentPage = ref<number>(1)
const genreId = ref<string | null>(null)
const isLoading = ref<boolean>(false)

onMounted(async() => {
  // const genreId = 'Western'
  // await getMoviesByGenre(genreId)
})

const getMoviesByGenre = async(genreIdEmit: string) => {
  try {
    isLoading.value = true
    currentPage.value = 1
    genreId.value = genreIdEmit
    const response: any = await moviesService.fetchMoviesByGenre(genreId.value , currentPage.value)
    listMoviesByGenre.value = response.data.results
  } catch (error) {
    console.error(error)
    ElNotification({ title: 'Error', message: 'An error occured', type: 'error', duration: 5000, })
  } finally {
    setTimeout(() => { isLoading.value = false }, 500)
  }
  
}

const loadMoreMovies = async() => {
  try {
    isLoading.value = true
    currentPage.value++
    if (genreId.value) {
      const response: any = await moviesService.fetchMoviesByGenre(genreId.value , currentPage.value)
      listMoviesByGenre.value = [...listMoviesByGenre.value, ...response.data.results]
    }
  } catch (error) {
    console.error(error)
    ElNotification({ title: 'Error', message: 'An error occured', type: 'error', duration: 5000, })
  } finally {
    setTimeout(() => { isLoading.value = false }, 500)
  }
}
</script>

<style lang="scss">
.list-page {
  .el-loading-spinner {
    position: sticky;
    top: 50% !important; 
  }
  .el-loading-spinner .path {
    stroke: red;
  }
  .el-tabs {
    --el-tabs-header-height: 60px;
    .el-tabs__nav-scroll {
      display: flex;
      justify-content: center;
    }
    .el-tabs__active-bar {
      background-color: red;
    }
    .el-tabs__item {
      font-size: 18px;
      &.is-active {
        color: red;
      }
      &:hover {
        color: red;
      }
    }
  }
}
</style>
