import { LEGENDE, MODELE, SINGLE_OPTION } from "../../../utils/constants";


export const JANTES_STANDARD = {
    type: SINGLE_OPTION,
    label: 'Standard',
    slug: 'standard',
    price: 0,
    default: false,
    selected: false
}

export const JANTES_SERAC = {
    type: SINGLE_OPTION,
    label: 'Serac',
    slug: 'serac',
    price: 1000,
    default: false,
    selected: false
}

export const JANTES_LEGENDE = {
    type: SINGLE_OPTION,
    label: 'Legende',
    slug: 'legende',
    price: 0,
    default: true,
    selected: true,
    model:LEGENDE
}