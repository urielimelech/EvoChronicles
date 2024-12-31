import { createSlice } from "@reduxjs/toolkit";
import { mainScreenBackground, stoneAgeBackground } from '../assets/imports';

const backgroundState = {
    background: '',
};

export const backgroundSlice = createSlice({
    name: 'background',
    initialState: backgroundState,
    reducers: {
        mainScreenAction: (state) => {
            state.background = mainScreenBackground;
        },
        stoneAgeScreenAction: (state) => {
            state.background = stoneAgeBackground
        },
    },
});

export const { mainScreenAction, stoneAgeScreenAction } = backgroundSlice.actions;
