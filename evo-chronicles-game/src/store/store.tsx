import { configureStore } from '@reduxjs/toolkit';
import { stageSlice } from '../reducers/stage-reducer';
import { experienceSlice } from '../reducers/experience-reducer';

// Create a Redux store
const store = configureStore({
    reducer: {
        stage: stageSlice.reducer,
        experience: experienceSlice.reducer,
    },
});

// Export the store
export default store;

// Export the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;