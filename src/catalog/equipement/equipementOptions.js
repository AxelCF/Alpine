import { CONDUITE_OPTIONS } from "./conduite/conduiteOption";
import { CONFORT_OPTIONS } from "./confort/confortOption";
import { DESIGN_OPTIONS } from "./design/designOption";
import { MEDIA_OPTIONS } from "./media/mediaOptions";
import { PERSOEXT_OPTIONS } from "./perso-ext/perso-extOption";
import { PERSOINT_OPTIONS } from "./perso-int/perso-intOption";
import { SECURITE_OPTIONS } from "./securité/sercurieOption";

export const EQUIPEMENT_OPTIONS = {
    label: 'Equipement',
    slug: 'equipement',
    options: [
        
        MEDIA_OPTIONS,
        CONDUITE_OPTIONS,
        CONFORT_OPTIONS,
        DESIGN_OPTIONS,
        PERSOEXT_OPTIONS,
        PERSOINT_OPTIONS,
        SECURITE_OPTIONS
        
    ]
}