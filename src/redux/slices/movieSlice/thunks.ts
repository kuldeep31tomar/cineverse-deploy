import { createAppAsyncThunk } from '@/src/redux/createAppAsyncThunk'
import { fetchUpcomingMovies } from './fetchUpcomingMovies'
import { fetchSearchQuery } from './fetchSearchQuery'
import { searchSlice } from '../..'

export const fetchMovies = createAppAsyncThunk(
  'upcomingMovies',
  async (page: number) => {
    const response = await fetchUpcomingMovies(page)
    return response
  }
)

export const fetchQuery = createAppAsyncThunk(
  'querySearch',
  async (query: string) => {
    const response = await fetchSearchQuery(query)
    return response
  }
)