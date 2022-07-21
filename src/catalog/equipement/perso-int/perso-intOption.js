import { PERSOINT_CONDUITE_HARMONIE_CARBONE, PERSOINT_CONDUITE_PEDALIER, PERSOINT_LOGO_VOLANT, PERSOINT_SIEGE_CHAUFFANT } from "./options/perso.interieur";

export const PERSOINT_OPTIONS = {
    label: 'Personalisation intérieur',
    slug: 'perso-int',
    uniqueOption: true,
    options: [
        PERSOINT_CONDUITE_PEDALIER,
        PERSOINT_CONDUITE_HARMONIE_CARBONE,
        PERSOINT_LOGO_VOLANT,
        PERSOINT_SIEGE_CHAUFFANT
    ]
}