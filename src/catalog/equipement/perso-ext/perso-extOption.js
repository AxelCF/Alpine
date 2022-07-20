import { GROUP_OPTION, SECTION, SELECT_OPTION } from "../../../utils/constants";
import { PERSOEXT_ETRIERS_FREIN_BLEU_ALPINE, PERSOEXT_ETRIERS_FREIN_GRIS, PERSOEXT_LOGO_ALPINE_AILES } from "./option/perso-exterieur";

export const PERSOEXT_OPTIONS = {
    type: SECTION,
    label: 'Média et Navigation',
    slug: 'media',
    options: [
        PERSOEXT_LOGO_ALPINE_AILES,
        {
            type: SELECT_OPTION,
            options: [
               PERSOEXT_ETRIERS_FREIN_GRIS,
               PERSOEXT_ETRIERS_FREIN_BLEU_ALPINE
            ]
        }
    ]

}