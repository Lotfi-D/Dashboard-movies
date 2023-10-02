import config from '@/config'
import axios, { AxiosResponse, AxiosError } from 'axios'

export default {
  fetchTrendMovies(): Promise<AxiosResponse | AxiosError> {
    return axios.get<AxiosResponse>(`${config.api.baseUrl}/trending/movie/day?language=en-US&api_key=${config.api.apiKey}`)
  },

  fetchMoviesByGenre(genreId: string, currentPage: number): Promise<AxiosResponse | AxiosError> {
    return axios.post(`${config.api.baseUrl}/discover/movie/?with_genres=${genreId}&page=${currentPage}&api_key=${config.api.apiKey}`)
  },

  fetchImageHeroBanner(movieId: number): Promise<AxiosResponse | AxiosError>  {
    return axios.get(`${config.api.baseUrl}/movie/${movieId}/images?api_key=${config.api.apiKey}`)
  },

  fetchMovieById(movieId: number): Promise<AxiosResponse | AxiosError>  {
    return axios.get(`${config.api.baseUrl}/movie/${movieId}?api_key=${config.api.apiKey}`)
  }
}
