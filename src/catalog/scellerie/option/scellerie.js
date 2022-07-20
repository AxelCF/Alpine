import { LEGENDE, SINGLE_OPTION } from "../../../utils/constants";

export const SCELLERIE_SIEGES_BAQUETS_CUIR_NOIR_DINAMICA  =  {
    type: SINGLE_OPTION,
    label: 'Sièges baquets en cuir noir et Dinamica',
    slug: 'Sièges-baquets-en-cuir-noir-et-Dinamica',
    price: 0,
    default: true,
    selected: true,
    model:PURE
    // Si une option n'est disponible que pour un seul des deux modèles, le spécifier au format 'model: PURE' par exemple
}

export const SCELLERIE_SIEGES_CUIR_NOIR_PERFORE = {
    type: SINGLE_OPTION,
    label: 'Sièges Confort en cuir noir perforé',
    slug: 'Sièges-Confort-en-cuir-noir-perforé',
    price: 800,
    default: false,
    selected: false,
    model:PURE

}

export const SCELLERIE_SIEGES_CONFORT_EN_CUIR_NOIR = {
    type: SINGLE_OPTION,
    label: 'Sièges Confort en cuir noir',
    slug: 'Sièges-Confort-en-cuir-noir',
    price: 0,
    default: true,
    selected: true,
    model:LEGENDE    
}

export const SCELLERIE_SIEGES_CONFORT_EN_CUIR_BRUN = {
    type: SINGLE_OPTION,
    label: 'Sièges Confort en cuir brun',
    slug: 'Sièges-Confort-en-cuir-brun',
    price: 800,
    default: true,
    selected: true,
    model:LEGENDE
}