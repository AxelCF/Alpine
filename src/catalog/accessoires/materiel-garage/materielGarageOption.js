import { GROUP_OPTION, SECTION, SELECT_OPTION } from "../../../utils/constants";
import { MATERIEL_CHARGEUR_DE_BATTERIE, MATERIEL_KITS_OUTILS_ALPINE } from "./options/materiel-de-garage";


export const MATERIEL_DE_GARAGE_OPTION = {
    type: SECTION,
    label: 'Materiel de garage',
    slug: 'materiel-de-garage',
    options: [
                MATERIEL_CHARGEUR_DE_BATTERIE,
                MATERIEL_KITS_OUTILS_ALPINE,
            ]
}