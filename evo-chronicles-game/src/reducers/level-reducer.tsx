import { createSlice } from "@reduxjs/toolkit"

const levelState = {
    level: 0
}

export const levelSlice = createSlice({
    name: 'level',
    initialState: levelState,
    reducers: {
        levelUp: (state) => {
            state.level += 1
        },
        startGame: (state) => {
            state.level = 1
        },
        endGame: (state) => {
            state.level = 0
        }
    }
})

export const { levelUp, startGame, endGame } = levelSlice.actions;

