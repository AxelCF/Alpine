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
            state.currentModel = action.payload;

            refreshPrice(state);
        },
        selectOption: (state, action) => {
            // PAYLOAD: optionSlug
            const option = findOption(action.payload);

            if (!option.selected) {
                if (option.groupe) {
                    disableGroupe(option.groupe);
                }
                option.selected = true;
            }
            else {
                if (!option.groupe) {
                    option.selected = false;
                }
            }

            refreshPrice(state);
        },
        goToStep: (state, action) => {
            // PAYLOAD : 0...6
            state.currentStep = action.payload;
        },
        resetFrom: (state, action) => {
            //PAYLOAD : 0...6
            for (let index = action.payload; index < state.steps.length; index++) {
                const step = state.steps[index];
                resetStepOptions(step);
            }

            refreshPrice(state)
        }
    },
})

export const { setModel, selectOption, goToStep, resetFrom } = configuratorSlice.actions

export default configuratorSlice.reducer

function refreshPrice(state) {

}

function getVisual(state) {

}