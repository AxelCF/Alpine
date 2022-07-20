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

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        // A completer
    },
})

// export const {  } = appSlice.actions

export default appSlice.reducer