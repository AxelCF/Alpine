import { createSlice } from '@reduxjs/toolkit'
import { MODEL_OPTIONS } from './catalog/accessoires/accessoiresOptions'
import { EQUIPEMENT_OPTIONS } from './catalog/equipement/equipementOptions'

import { ACCESSOIRES } from './utils/constants'

const initialState = {
    price: 0,
    currentModel: null,
    currentStep: 0,
    steps: [
        MODEL_OPTIONS,
        EQUIPEMENT_OPTIONS,
        ACCESSOIRES_OPTIONS
    ]

}

export const configuratorSlice = createSlice({
    name: 'configurator',
    initialState,
    reducers: {
        setModel: (state, action) => {
            // PAYLOAD: PURE | LEGENDE
        },
        selectOption: (state, action) => {
            // PAYLOAD: optionSlug
        },
        goToStep: (state, action) => {

        },
        resetFrom: (state, action) => {

        }
    },
})

export const { setModel, selectOption, goToStep, resetFrom } = configuratorSlice.actions

export default configuratorSlice.reducer

function refreshPrice(state) {

}

function getVisual(state) {

}