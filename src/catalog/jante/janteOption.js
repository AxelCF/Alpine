import { GROUP_OPTION, SECTION, SELECT_OPTION } from "../../../utils/constants";
import { EXTERIEUR_LEGENDE, EXTERIEUR_SERAC, EXTERIEUR_STANDARD } from "./options/Jante";
import { MULTIMEDIA_SMARTPHONE_MAGNETIQUE_FIXATION_SUR_TABLEAU_DE_BORD, MULTIMEDIA_SUPPORT_CAMERA_SPORT } from "./options/multimedia";
import { ALARME, CHAINE_A_NEIGE_PREMIUM_GRIP, EXTINCTEUR_1KG, FIXATION_EXTINCTEUR, KIT_DE_SECURITE, PROTECTION_PRISE_OBD } from "./options/Transport_et_protection";


export const JANTE_OPTION = {
    type: SECTION,
    label: 'Jante Option',
    slug: 'jante_option',
    options: [
       EXTERIEUR_STANDARD,
       EXTERIEUR_SERAC,
       EXTERIEUR_LEGENDE
        ]
}