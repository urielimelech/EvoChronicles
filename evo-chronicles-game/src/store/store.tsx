import { configureStore } from '@reduxjs/toolkit';
import { levelSlice } from '../reducers/level-reducer';
import { backgroundSlice } from '../reducers/screen-reducer';
import { experienceSlice } from '../reducers/experience-reducer';

// Create a Redux store
const store = configureStore({
    reducer: {
        background: backgroundSlice.reducer,
        level: levelSlice.reducer,
        experience: experienceSlice.reducer,
    },
});

// Export the store
export default store;

// Export the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;