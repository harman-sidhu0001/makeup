import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="hero min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden"
    >
      <div className="max-w-4xl px-6">
        <h1
          className="heading-font text-3xl md:text-7xl font-bold mb-6 cursor-default"
          data-aos="fade-up"
        >
          Enhance Your Natural Beauty
        </h1>
        <p
          className="text-l md:text-2xl mb-10 cursor-default"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Professional makeup artistry for brides, destination weddings, and
          special occasions. Plus, learn from the best at our online academy.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            data-aos="fade-right"
            data-aos-duration="1500"
            href="#book"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-medium transition duration-300"
          >
            Book Your Session
          </Link>
          <Link
            data-aos="fade-left"
            data-aos-duration="1500"
            href="#academy"
            className="bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-full text-lg font-medium transition duration-300"
          >
            Explore Academy
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <Link
          href="#services"
          className="text-white text-4xl floating-btn inline-block"
        >
          <i className="fas fa-chevron-down"></i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
