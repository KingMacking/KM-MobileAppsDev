export const GOOGLE_API = 'AIzaSyDVZyQxrKeX2pbx1HWSq4-E5_IFMFh_s38';
export const URL_MAPS = ({ lat, lng, zoom }) =>
    `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap&markers=color:red%7Clabel:A%7C${lat},${lng}&key=${GOOGLE_API}`;

export const URL_BASE_GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/';
