import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mainScreenBackground, stoneAgeBackground } from '../assets/imports';

// Define initial state
const initialState = {
    background: '',
};

// Create a slice
const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        mainScreenAction: (state) => {
            state.background = mainScreenBackground;
        },
        stoneAgeScreenAction: (state) => {
            state.background = stoneAgeBackground
        },
    },
});

// Export actions
export const { mainScreenAction, stoneAgeScreenAction } = backgroundSlice.actions;

// Create a Redux store
const store = configureStore({
    reducer: {
        background: backgroundSlice.reducer,
    },
});

// Export the store
export default store;

// Export the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;