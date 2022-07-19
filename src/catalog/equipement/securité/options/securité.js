import { SINGLE_OPTION } from "../../../../utils/constants";

export const SECURITE =  {
    type: SINGLE_OPTION,
    label: 'Systeme de freinage Haute-perf 320mm',
    slug: 'securité',
    price: 500,
    default: false,
    selected: false
    // Si une option n'est disponible que pour un seul des deux modèles, le spécifier au format 'model: PURE' par exemple
}


export const ASSISTANCE =  {
    type: SINGLE_OPTION,
    label: "Assistance au freinage d'urgence",
    slug: 'Assistance',
    price: 0,
    default: true,
    selected: true
    // Si une option n'est disponible que pour un seul des deux modèles, le spécifier au format 'model: PURE' par exemple
}

export const AIRBAG =   {
    type: SINGLE_OPTION,
    label: 'Airbag frontaux conducteur et passager',
    slug: 'securité',
    price: 0,
    default: true,
    selected: true
    // Si une option n'est disponible que pour un seul des deux modèles, le spécifier au format 'model: PURE' par exemple
}
