import { LEGENDE, PURE, SINGLE_OPTION } from "../../../utils/constants"

// MODELS
export const MODELE_PURE = {
    type: SINGLE_OPTION,
    label: PURE,
    slug: 'pure',
    price: 0,
    default: false,
    selected: false,
    models: [PURE, LEGENDE]
}

export const MODELE_LEGENDE = {
    type: SINGLE_OPTION,
    label: LEGENDE,
    slug: 'legende',
    price: 0,
    default: false,
    selected: false,
    models: [PURE, LEGENDE]
}