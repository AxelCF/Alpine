import { GROUP_OPTION, SECTION, SELECT_OPTION } from "../../../utils/constants";
import { INTERIEUR_FILLET_DE_RANGEMENT_HORIZONTAL, INTERIEUR_TAPIS_DE_COFFRE } from "./options/Interieur";


export const INTERIEUR_OPTION = {
    type: SECTION,
    label: 'INTERIEUR Option',
    slug: 'interieur_option',
    options: [
                INTERIEUR_TAPIS_DE_COFFRE,
                INTERIEUR_FILLET_DE_RANGEMENT_HORIZONTAL,
            ]
}