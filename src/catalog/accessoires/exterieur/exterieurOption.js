import { EXTERIEUR_ANTIVOL_JANTE, EXTERIEUR_CABOCHONS_ALPINE, EXTERIEUR_HOUSSE_DE_PROTECTION } from "./options/exterieur";

export const EXTERIEUR_OPTIONS = {
    label: 'Éxterieur',
    slug: 'exterieur',
    uniqueOption: true,
    options: [
        EXTERIEUR_CABOCHONS_ALPINE,
        EXTERIEUR_HOUSSE_DE_PROTECTION,
        EXTERIEUR_ANTIVOL_JANTE
    ]
}