import { SINGLE_OPTION } from "../../../../utils/constants";

export const MEDIA_TELEMETRICS =  {
    type: SINGLE_OPTION,
    label: 'Alpine Telemetrics',
    slug: 'telemetry',
    price: 204,
    default: false,
    selected: false
    // Si une option n'est disponible que pour un seul des deux modèles, le spécifier au format 'model: PURE' par exemple
}

export const MEDIA_AUDIO_STANDARD = {
    type: SINGLE_OPTION,
    label: 'Système Audio standard',
    slug: 'audio-standard',
    price: 0,
    default: true,
    selected: true
}

export const MEDIA_AUDIO_FOCAL = {
    type: SINGLE_OPTION,
    label: 'Système Audio Focal',
    slug: 'audio-focal',
    price: 600,
    default: false,
    selected: false
}

export const MEDIA_AUDIO_FOCAL_PREMIUM = {
    type: SINGLE_OPTION,
    label: 'Système Audio Focal Premium',
    slug: 'audio-focal-premium',
    price: 1200,
    default: false,
    selected: false
}



