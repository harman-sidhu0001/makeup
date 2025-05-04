import { useState } from "react";
import BookingModal from "./BookingModal";

interface Service {
  icon: string;
  title: string;
  description: string;
  background: string;
  features: string[];
}

const Services: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const openBookingModal = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const services: Service[] = [
    {
      icon: "fa-heart",
      title: "Bridal Makeup",
      background: "/photo1.jpg",
      description:
        "Flawless bridal makeup that lasts all day and looks radiant in every photo.",
      features: [
        "HD & Airbrush Options",
        "Customized Skin Prep",
        "Jewelry & Outfit Coordination",
      ],
    },
    {
      icon: "fa-star",
      title: "Reception Makeup",
      background: "/photo2.jpg",
      description:
        "Evening glam with bold, camera-ready looks for your post-wedding celebration.",
      features: [
        "Smokey Eyes & Glossy Lips",
        "Waterproof Long-Lasting Base",
        "Modern Glam Touch",
      ],
    },
    {
      icon: "fa-gift",
      title: "Shagun Makeup",
      background: "/photo3.jpg",
      description:
        "Soft traditional makeup perfect for your Shagun or pre-wedding rituals.",
      features: [
        "Natural Blush Tones",
        "Minimalistic Elegance",
        "Quick & Fresh Finish",
      ],
    },
    {
      icon: "fa-ring",
      title: "Engagement",
      background: "/photo4.jpg",
      description:
        "Timeless makeup with elegant glam for your engagement ceremony.",
      features: [
        "Glowing Base Makeup",
        "Contouring & Highlights",
        "Hair Styling Options",
      ],
    },
    {
      icon: "fa-leaf",
      title: "Mehndi Ceremony",
      background: "/photo5.jpg",
      description:
        "Vibrant and playful makeup to match the colors and fun of the Mehndi event.",
      features: [
        "Bright & Fresh Look",
        "Long-Lasting Lip Color",
        "Lightweight & Comfortable",
      ],
    },
    {
      icon: "fa-glass-cheers",
      title: "Party Makeup",
      background: "/photo6.jpg",
      description:
        "Glamorous makeup for birthdays, cocktail parties, and other special evenings.",
      features: [
        "Bold Eyes or Bold Lips",
        "Custom Looks on Request",
        "Quick Touch-Up Kit",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-4 cursor-default"
            data-aos="fade-up"
          >
            My Services
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto cursor-default"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Whether it&aposs your big day or a special event, I craft the
            perfect look for every occasion with personalized makeup artistry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-top opacity-50"
                style={{ backgroundColor: "pink" }}
              ></div>

              {/* Foreground Content */}
              <div className="relative z-10 p-8 bg-white/80  rounded-xl h-full">
                <div className="text-pink-600 text-5xl mb-6">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3
                  className="heading-font text-2xl font-bold text-gray-900 mb-4 cursor-default"
                  data-aos="fade-up"
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-600 mb-6 cursor-default"
                  data-aos="fade-up"
                >
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6 cursor-default">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <i className="fas fa-check text-pink-500 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openBookingModal(service.title)}
                  className="inline-block text-pink-600 font-medium hover:text-pink-700 cursor-pointer"
                >
                  Book Now <i className="fas fa-arrow-right ml-1"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        serviceName={selectedService}
      />
    </section>
  );
};

export default Services;
