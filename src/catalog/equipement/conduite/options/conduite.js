import { SINGLE_OPTION } from "../../../../utils/constants";

export const CONDUITE_AIDE_STATIONNEMENT_AR  =  {
    type: SINGLE_OPTION,
    label: 'Aide au stationnement AR',
    slug: 'Aide-au-stationnement-AR',
    price: 420,
    default: true,
    selected: true,
    group: 'stationnement'
    // Si une option n'est disponible que pour un seul des deux modèles, le spécifier au format 'model: PURE' par exemple
}

export const CONDUITE_AIDE_STATIONNEMENT_AV_AR  =  {
    type: SINGLE_OPTION,
    label: 'Aide au stationnement AV AR',
    slug: 'Aide-au-stationnement-AV-AR',
    price: 750,
    default: false,
    selected: false,
    group: 'stationnement'
}

export const CONDUITE_AIDE_STATIONNEMENT_AV_AR_CAMERA  =  {
    type: SINGLE_OPTION,
    label: 'Aide au stationnement AV AR CAM',
    slug: 'Aide-au-stationnement-AV-AR-CAM',
    price: 1200,
    default: false,
    selected: false,
    group: 'stationnement'
}

export const CONDUITE_ECHAPEMENT_SPORT_ACTIF  =  {
    type: SINGLE_OPTION,
    label: 'Echappement Sport actif',
    slug: 'Echappement-Sport-actif',
    price: 1500,
    default: false,
    selected: false
}