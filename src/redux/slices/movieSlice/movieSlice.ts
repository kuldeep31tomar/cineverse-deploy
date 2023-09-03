import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { fetchMovies } from './thunks'

const initialState: movieSliceState = {
    data: '',
    loading: 'idle'
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
        if(state.loading === 'idle'){
            state.loading = 'pending'
        }
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
        if(Object.keys(state.data).length === 0){
            state.data = action.payload;
            // console.log('initial state load', state.data);
            state.loading = 'successful';
        } else {
            var prevState = JSON.parse(state.data);
            var newState = JSON.parse(action.payload);
            var merged = prevState.concat(newState);
            state.data = JSON.stringify(merged);
            // console.log('state updated', state.data);
            state.loading = 'successful';
        }
    })
    builder.addCase(fetchMovies.rejected, (state) => {
        if(state.loading === 'pending'){
            state.loading = 'failed'
        }
    })
  }
})

export interface movieSliceState {
  data: any,
  loading: 'idle' | 'pending' | 'failed' | 'successful'
}
