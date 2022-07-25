import { createSlice, current } from '@reduxjs/toolkit'
import { EQUIPEMENT_OPTIONS } from './catalog/equipement/equipementOptions'
import { MODEL_OPTIONS } from './catalog/model/modelOptions'
import {ACCESSOIRES_OPTIONS} from './catalog/accessoires/accessoiresOptions'
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

            state.price = getTotalPrice(state);
        },
        selectOption: (state, action) => {
            // PAYLOAD: optionSlug
            const option = getOption(state, action.payload);

            console.log(current(option))

            if (!option.selected) {
                if (option.group) {
                    disableGroup(state, option.group);
                }
                option.selected = true;
            }
            else {
                if (!option.group) {
                    option.selected = false;
                }
            }

            state.price = getTotalPrice(state);
        },
        goToStep: (state, action) => {
            // PAYLOAD : 0...6
            state.currentStep = action.payload;
        },
        resetFrom: (state, action) => {
            //PAYLOAD : 0...6
            for (let index = action.payload; index < state.steps.length; index++) {
                const step = state.steps[index];
                resetFromStep(state, step);
            }

            state.price = getTotalPrice(state)
        }
    },
})

export const { setModel, selectOption, goToStep, resetFrom } = configuratorSlice.actions

export default configuratorSlice.reducer

const getOption = (data, slug) => {
    if (!data) throw 'Merci de fournir des données';
    if (!slug) throw 'Merci de fournir un slug';

    const option = extract(data.steps, slug);
    if (!option) throw "Aucune option trouvée avec le slug " + slug;

    return option;
}

const getTotalPrice = (data) => {
    if (!data) throw 'Merci de fournir des données';

    const price = extractPrice(data.steps);

    return price;
}

const extract = (options, slug) => {
    for (const option of options) {
        if (option.slug === slug) return option;

        if (option.options) {
            const findOption = extract(option.options, slug);
            if (findOption) return findOption;
        }
    }
}

const extractPrice = (options) => {
    let price = 0;

    for (const option of options) {
        price += option.price ?? 0;

        if (option.options) price += extractPrice(option.options);
    }
    return price;
}

const disableGroup = (data, group) => {
    if (!data) throw 'Merci de fournir des données';
    if (!group) throw 'Merci de fournir un groupe';

    mutate(data.steps, {group: group});
}

const resetFromStep = (data, index = 0) => {
    if (!data) throw 'Merci de fournir des données';

    mutate(data.steps.slice(index), {reset: true})
}

const mutate = (options, {group, reset}) => {
    for (const option of options) {

        if (reset) {
            option.selected = option.default;
        }

        if (option.group === group) {
            option.selected = false;
        }

        if (option.options) mutate(option.options, {group: group, reset: reset});
    }
}