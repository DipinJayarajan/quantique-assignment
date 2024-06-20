import { configureStore } from '@reduxjs/toolkit';
import userReducer from './SliceFile';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;