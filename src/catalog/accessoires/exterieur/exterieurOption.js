import { GROUP_OPTION, SECTION, SELECT_OPTION } from "../../../utils/constants";
import { EXTERIEUR_ANTIVOL_JANTE, EXTERIEUR_CABOCHONS_ALPINE, EXTERIEUR_HOUSSE_DE_PROTECTION } from "./options/exterieur";


export const EXTERIEUR_OPTIONS = {
    type: SECTION,
    label: 'Exterieur Option',
    slug: 'exterieur_option',
    options: [
                EXTERIEUR_CABOCHONS_ALPINE,
                EXTERIEUR_ANTIVOL_JANTE,
                EXTERIEUR_HOUSSE_DE_PROTECTION
            ]
}