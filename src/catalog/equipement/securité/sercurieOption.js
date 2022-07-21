import { AIRBAG, ASSISTANCE, SECURITE } from "./options/securité";

export const SECURITE_OPTIONS = {
    label: 'sécurité',
    slug: 'securite',
    uniqueOption: true,
    options: [
        SECURITE,
        ASSISTANCE,
        AIRBAG
    ]
}