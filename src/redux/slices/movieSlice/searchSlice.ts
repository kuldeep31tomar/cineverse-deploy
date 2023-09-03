import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { fetchQuery } from "./thunks";

const initialState: searchSliceState = {
  data: "",
  loading: "idle",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch(state) {
      (state.data = ""), 
      (state.loading = "idle")
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuery.pending, (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(fetchQuery.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "successful";
        state.data = action.payload;
      }
    });
    builder.addCase(fetchQuery.rejected, (state) => {
      if (state.loading === "pending") {
        state.loading = "failed";
      }
    });
  },
});

export interface searchSliceState {
  data: any;
  loading: "idle" | "pending" | "failed" | "successful";
}

export const { clearSearch } = searchSlice.actions;
