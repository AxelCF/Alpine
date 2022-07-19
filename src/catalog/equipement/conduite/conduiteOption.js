import { GROUP_OPTION, SECTION, SELECT_OPTION } from "../../../utils/constants";
import { CONDUITE_AIDE_STATIONNEMENT_AR, CONDUITE_AIDE_STATIONNEMENT_AV_AR, CONDUITE_AIDE_STATIONNEMENT_AV_AR_CAMERA, CONDUITE_ECHAPEMENT_SPORT_ACTIF } from "./options/conduite";


export const MEDIA_OPTIONS = {
    type: SECTION,
    label: 'Média et Navigation',
    slug: 'media',
    options: [
        CONDUITE_ECHAPEMENT_SPORT_ACTIF,
        {
            type: SELECT_OPTION,
            options: [
               CONDUITE_AIDE_STATIONNEMENT_AR,
               CONDUITE_AIDE_STATIONNEMENT_AV_AR,
               CONDUITE_AIDE_STATIONNEMENT_AV_AR_CAMERA
            ]
        }
    ]

}