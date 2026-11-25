/**
 * Google Business Profile, setari pentru recenzii.
 *
 * Cum obtii Place ID-ul (dupa ce profilul Google Business e verificat si public):
 *  1. Deschide https://developers.google.com/maps/documentation/places/web-service/place-id
 *  2. Cauta "Paul Apostol" (cu adresa/zona profilului) in "Place ID Finder".
 *  3. Copiaza valoarea care incepe de obicei cu "ChIJ..." in constanta de mai jos.
 *
 * Cat timp constanta e goala, butoanele de recenzii nu sunt afisate pe site.
 */
export const GOOGLE_PLACE_ID = "ChIJs8xb9aldRUcRLmUPeP499nk";

export const GOOGLE_WRITE_REVIEW_URL = GOOGLE_PLACE_ID
  ? `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
  : "";

export const GOOGLE_READ_REVIEWS_URL = GOOGLE_PLACE_ID
  ? `https://search.google.com/local/reviews?placeid=${GOOGLE_PLACE_ID}`
  : "";
