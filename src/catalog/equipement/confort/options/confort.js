import { SINGLE_OPTION } from "../../../../utils/constants";


export const CONFORT_RETROVISEUR_INTERIEUR_ELECTROCHROME =  {
    type: SINGLE_OPTION,
    label: 'Retroviseur intérieur électrochrome',
    slug: 'Retroviseur',
    price: 0,
    default: true,
    selected: true
    // Si une option n'est disponible que pour un seul des deux modèles, le spécifier au format 'model: PURE' par exemple
}

export const CONFORT_RETROVISEUR_EXT_CHAUF_REBBATABLES_ELEC = {
    type: SINGLE_OPTION,
    label: 'Rétroviseurs ext. chauf. rabattables élec.',
    slug: 'retro-ext-rabat',
    price: 504,
    default: false,
    selected: false
}

export const CONFORT_PACK_DE_RANGEMENT = {
    type: SINGLE_OPTION,
    label: 'Pack de rangement',
    slug: 'rangement',
    price: 504,
    default: false,
    selected: false
}

export const CONFORT_REGULATEUR_LIMITEUR_DE_VITESSE = {
    type: SINGLE_OPTION,
    label: 'Régulateur / limiteur de vitesse',
    slug: 'Régulateur_limiteur',
    price: 0,
    default: true,
    selected: true
}