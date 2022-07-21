import { COULEURS_TEINTE_METALLISEE_NOIR_PROFOND, COULEURS_TEINTE_SPECIAL_BLEU_ALPINE, PEINTURE_OPAQUE_BLANC_ACIER } from "./options/Teintes";

export const COULEUR_OPTIONS = {
    label: 'couleur',
    slug: 'couleur',
    uniqueOption: true,
    options: [
        COULEURS_TEINTE_SPECIAL_BLEU_ALPINE,
        COULEURS_TEINTE_METALLISEE_NOIR_PROFOND,
        PEINTURE_OPAQUE_BLANC_ACIER,
    ]
}