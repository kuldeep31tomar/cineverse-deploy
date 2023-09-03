import { movieSlice, searchSlice } from './slices'

export const reducer = {
  movies: movieSlice.reducer,
  search: searchSlice.reducer
}
