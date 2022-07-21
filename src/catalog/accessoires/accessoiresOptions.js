import { EXTERIEUR_OPTIONS } from "./exterieur/exterieurOption";
import { INTERIEUR_OPTION } from "./Interieur/interieurOption";
import { MATERIEL_DE_GARAGE_OPTION } from "./materiel-garage/materielGarageOption";
import { MUTLTIMEDIA_OPTION } from "./multimedia/multimediaOption";
import { TRANSPORT_OPTION } from "./transport-protection/TransportProtectionOption";
import { MODEL_OPTIONS } from "../model/modelOptions";

export const ACCESSOIRES_OPTIONS = {
    label: 'Accessoire',
    slug: 'accessoire',
    options: [
        EXTERIEUR_OPTIONS,
        INTERIEUR_OPTION,
        MATERIEL_DE_GARAGE_OPTION,
        MUTLTIMEDIA_OPTION,
        TRANSPORT_OPTION
    ]
}