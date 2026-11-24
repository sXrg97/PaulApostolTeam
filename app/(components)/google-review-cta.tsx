import { Star } from "lucide-react";
import { GOOGLE_WRITE_REVIEW_URL, GOOGLE_READ_REVIEWS_URL } from "../lib/google-business";
import { EXTERNAL_LINK_PROPS } from "../lib/site";
import { btnPrimary, btnSecondary, card } from "../lib/ui";

export const GoogleReviewCta = () => {
  // Nu afisam nimic cat timp Place ID-ul Google nu este completat
  if (!GOOGLE_WRITE_REVIEW_URL) return null;

  return (
    <div data-reveal className={`${card} mt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}>
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
          <Star className="h-6 w-6" aria-hidden="true" />
        </span>
        <p className="text-base text-zinc-300 md:text-lg">
          Ai lucrat cu mine? Părerea ta contează și îi ajută pe alții să ia o decizie.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a href={GOOGLE_WRITE_REVIEW_URL} {...EXTERNAL_LINK_PROPS} className={btnPrimary}>
          Lasă o recenzie pe Google
        </a>
        {GOOGLE_READ_REVIEWS_URL && (
          <a href={GOOGLE_READ_REVIEWS_URL} {...EXTERNAL_LINK_PROPS} className={btnSecondary}>
            Vezi recenziile
          </a>
        )}
      </div>
    </div>
  );
};
