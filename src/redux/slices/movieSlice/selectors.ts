import type { ReduxState } from '@/src/redux'

//Upcomming movies selectors
export const selectMovies = (state: ReduxState) => state.movies.data
export const selectLoadingState = (state: ReduxState) => state.movies.loading

//search movies selectors
export const selectSearch = (state: ReduxState) => state.search.data
export const selectSearchLoading = (state: ReduxState) => state.search.loading