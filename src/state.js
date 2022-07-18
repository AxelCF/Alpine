import { createSlice } from '@reduxjs/toolkit'
import { EQUIPEMENT_OPTIONS } from './catalog/equipement/equipementOptions'
import { MODEL_OPTIONS } from './catalog/model/modelOptions'

const initialState = {
    price: 0,
    currentModel: null,
    currentStep: 0,
    steps: [
        MODEL_OPTIONS,
        // A completer
        EQUIPEMENT_OPTIONS
    ]

}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // A completer
    },
})

// export const {  } = appSlice.actions

export default appSlice.reducer