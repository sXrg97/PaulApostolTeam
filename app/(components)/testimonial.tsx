type TestimonialProps = {
    quote: string;
    author: string;
  };
  
  export const Testimonial = ({ quote, author }: TestimonialProps) => {
    return (
      <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 p-8 rounded-lg border border-zinc-800 shadow-xl relative">
        {/* Quotation mark decoration */}
        <div className="absolute -top-5 left-6 text-red-600 text-6xl opacity-30">&quot;</div>
        
        <p className="mb-6 italic text-lg text-zinc-300 relative z-10">{quote}</p>
        
        <div className="flex items-center">
          <div className="h-8 w-1 bg-red-600 rounded-full mr-3"></div>
          <p className="font-bold text-red-500">{author}</p>
        </div>
      </div>
    );
  };