import { GROUP_OPTION, SECTION, SELECT_OPTION } from "../../../utils/constants";
import { ALARME, CHAINE_A_NEIGE_PREMIUM_GRIP, EXTINCTEUR_1KG, FIXATION_EXTINCTEUR, KIT_DE_SECURITE, PROTECTION_PRISE_OBD } from "./options/Transport_et_protection";


export const TRANSPORT_OPTION = {
    type: SECTION,
    label: 'Transport Option',
    slug: 'transport_option',
    options: [
        EXTINCTEUR_1KG,
        CHAINE_A_NEIGE_PREMIUM_GRIP,
        ALARME,
        PROTECTION_PRISE_OBD,
        KIT_DE_SECURITE,
        FIXATION_EXTINCTEUR
            ]
}