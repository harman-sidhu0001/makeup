import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  img: string;
}

const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const testimonials: Testimonial[] = [
    {
      quote:
        "Kamna transformed my wedding day look beyond my expectations. My makeup lasted from morning until the last dance, and I received so many compliments. She's truly an artist!",
      author: "Sarah J.",
      role: "Bride, June 2024",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    },
    {
      quote:
        "The Makeup Business Bootcamp gave me the confidence and tools to launch my freelance career. Within 3 months I was fully booked! Kamna's mentorship is invaluable.",
      author: "Priya K.",
      role: "Makeup Artist, Academy Graduate",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
    },
    {
      quote:
        "For our destination wedding in Bali, Kamna created the perfect look that photographed beautifully and withstood the tropical humidity. She's a true professional!",
      author: "Emily & Mark",
      role: "Destination Wedding, April 2023",
      img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 cursor-default" data-aos="fade-up">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Love
          </h2>
          <p className="text-l text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - here&apos;s what our clients
            say about their experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white rounded-xl p-8"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
            >
              <div className="flex items-center mb-6">
                <div className="text-pink-500 text-3xl mr-4">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div className="text-yellow-400 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.author}
                    fill
                    sizes="48px"
                    className="rounded-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center" data-aos="fade-up">
          <Link
            href="#contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-medium transition duration-300"
          >
            Share Your Experience
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
