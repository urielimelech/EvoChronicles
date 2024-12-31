import { createSlice } from "@reduxjs/toolkit"

const experienceState = {
    xp: 0,
    multiplier: 1,
    maxXp: 10,
    characterLevel: 1
}

export const experienceSlice = createSlice({
    name: 'experience',
    initialState: experienceState,
    reducers: {
        gainXP: (state, action) => {
            state.xp += (action.payload * state.multiplier)
            if (state.xp >= state.maxXp) {
                state.xp = state.xp - state.maxXp
                state.maxXp *= (state.characterLevel / 100)
                state.characterLevel += 1
            }
        },
        updateMultiplier: (state, action) => {
            state.multiplier += action.payload
        },
        resetXP: (state) => {
            state.xp = 0
        },
        raiseMaxXP: (state, action) => {
            state.maxXp += action.payload
        }
    }
})

export const { gainXP, updateMultiplier, resetXP, raiseMaxXP } = experienceSlice.actions;

