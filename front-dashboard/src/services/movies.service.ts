import config from '@/config'
import axios, { AxiosResponse, AxiosError } from 'axios'
// import { Movie } from '@/types/movies'

export default {
  fetchTrendMovies(): Promise<AxiosResponse | AxiosError> {
    return axios.get<AxiosResponse>(`${config.api.baseUrl}/trending/movie/day?language=en-US&api_key=${config.api.apiKey}`)
  },

  // getMoviesByGenres(payload: any) {
  //   // return axios.post(`${config.api.baseUrl}/`, payload)
  // },

  fetchImageHeroBanner(movieId: number): Promise<AxiosResponse | AxiosError>  {
    return axios.get(`${config.api.baseUrl}/movie/${movieId}/images?api_key=${config.api.apiKey}`)
  },

  fetchMovieById(movieId: number): Promise<AxiosResponse | AxiosError>  {
    return axios.get(`${config.api.baseUrl}/movie/${movieId}?api_key=${config.api.apiKey}`)
  }
}
