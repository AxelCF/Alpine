import { SINGLE_OPTION } from "../../../utils/constants";


export const COULEURS_TEINTE_SPECIAL_BLEU_ALPINE =  {
    type: SINGLE_OPTION,
    label: 'Teinte special bleu alpine',
    slug: 'teinte-bleu',
    price: 1800,
    default: false,
    selected: false
    // Si une option n'est disponible que pour un seul des deux modèles, le spécifier au format 'model: PURE' par exemple
}

export const COULEURS_TEINTE_METALLISEE_NOIR_PROFOND =  {
    type: SINGLE_OPTION,
    label: 'Teint metallisée noir profond',
    slug: 'teinte-metallisée-noir',
    price: 840,
    default: false,
    selected: false
}

export const PEINTURE_OPAQUE_BLANC_ACIER =  {
    type: SINGLE_OPTION,
    label: 'Peinture opaque blanc acier',
    slug: 'peinture-opaque-blanc-acier',
    price: 0,
    default: true,
    selected: true
}
