import { createSlice } from "@reduxjs/toolkit";

interface StageState {
    stage: number | null;
}

const stageState: StageState = {
    stage: null
}

export const stageSlice = createSlice({
    name: 'stage',
    initialState: stageState,
    reducers: {
        stageUp: (state) => {
            if (state.stage !== null)
                state.stage += 1
        },
        startGame: (state) => {
            state.stage = 0
        },
        endGame: (state) => {
            state.stage = 0
        }
    }
})

export const { stageUp, startGame, endGame } = stageSlice.actions;

