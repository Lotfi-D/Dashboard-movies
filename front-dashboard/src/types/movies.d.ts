type TMovie = {
  id: number | null,
  title: string,
  overview: string,
  poster_path: string,
  backdrop_path: string,
  release_date: string,
  popularity: number | null,
  vote_average: number | null,
  genre_ids?: Array,
  display_hero_banner?: string
}

type TBackDropResponse = {
  iso_639_1: string,
  width: number,
  height: number,
}

type TGenre = {
  id: number,
  name: string
} 

export { TMovie, TBackDropResponse, TGenre }
