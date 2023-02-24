import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/videos/videoSlice';
import tagReducer from '../features/tags/tagsSlice';

export const store = configureStore({
  reducer: {
    videos: videoReducer,
    tags: tagReducer
  },
});
