import { GOOGLE_WRITE_REVIEW_URL, GOOGLE_READ_REVIEWS_URL } from "../lib/google-business";

export const GoogleReviewCta = () => {
  // Nu afisam nimic cat timp Place ID-ul Google nu este completat
  if (!GOOGLE_WRITE_REVIEW_URL) return null;

  return (
    <div className="mt-10 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-6 sm:p-8 rounded-lg border border-zinc-800 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex items-center">
        <div className="h-8 w-1 bg-red-600 rounded-full mr-3"></div>
        <p className="text-lg text-zinc-300">
          Ai lucrat cu mine? Părerea ta contează și îi ajută pe alții să ia o decizie.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={GOOGLE_WRITE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-bold text-center transition-colors"
        >
          Lasă o recenzie pe Google
        </a>
        {GOOGLE_READ_REVIEWS_URL && (
          <a
            href={GOOGLE_READ_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-600 hover:border-red-500 hover:text-red-500 text-white px-8 py-3 rounded-md text-lg font-bold text-center transition-colors"
          >
            Vezi recenziile
          </a>
        )}
      </div>
    </div>
  );
};
