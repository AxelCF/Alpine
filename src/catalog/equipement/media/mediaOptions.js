import { GROUP_OPTION, SECTION, SELECT_OPTION } from "../../../utils/constants";
import { MEDIA_AUDIO_FOCAL, MEDIA_AUDIO_FOCAL_PREMIUM, MEDIA_AUDIO_STANDARD, MEDIA_TELEMETRICS } from "./options/media";

export const MEDIA_OPTIONS = {
    type: SECTION,
    label: 'Média et Navigation',
    slug: 'media',
    options: [
        {
            type: GROUP_OPTION,
            options: [
                MEDIA_TELEMETRICS,
                {
                    type: SELECT_OPTION,
                    options: [
                       MEDIA_AUDIO_STANDARD,
                       MEDIA_AUDIO_FOCAL,
                       MEDIA_AUDIO_FOCAL_PREMIUM
                    ]
                }
            ]
        }
    ]
}