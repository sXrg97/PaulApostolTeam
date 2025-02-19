type TestimonialProps = {
    quote: string;
    author: string;
  };
  
  export const Testimonial = ({ quote, author }: TestimonialProps) => {
    return (
      <div className="bg-black p-6 rounded-lg">
        <p className="mb-4 italic">&ldquo;{quote}&rdquo;</p>
        <p className="font-bold">- {author}</p>
      </div>
    );
  };