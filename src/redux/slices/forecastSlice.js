import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
};

export const getForecastAsync = createAsyncThunk(
  "forecast/fetchData",
  async (info) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${info.latitude}&longitude=${info.longitude}&daily=temperature_2m_max&timezone=UTC`
    );
    const data = await response.json();
    return data;
  }
);

export const forecastSlice = createSlice({
  name: "forecast",
  initialState,

  reducers: {
    resetForecast: (state) => {
      state.data = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getForecastAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getForecastAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = [action.payload];
      });
  },
});

export const { resetForecast } = forecastSlice.actions;

export const selectForecastData = (state) => state.forecast.data;

export default forecastSlice.reducer;
