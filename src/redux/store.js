import { configureStore } from '@reduxjs/toolkit';
import forecastSlice from './slices/forecastSlice';


export const store = configureStore({
  reducer: {
    forecast: forecastSlice,
  },
});
