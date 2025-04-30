import { useState } from "react";
import BookingModal from "./BookingModal";

interface Service {
  icon: string;
  title: string;
  description: string;
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
      description:
        "Flawless makeup that lasts all day and photographs beautifully. Includes trial session to perfect your look.",
      features: [
        "Traditional & Contemporary Styles",
        "Airbrush & HD Makeup Options",
        "Luxury Skincare Prep",
      ],
    },
    {
      icon: "fa-globe-americas",
      title: "Destination Weddings",
      description:
        "Specialized services for weddings abroad with travel packages and on-location convenience.",
      features: [
        "Travel & Accommodation Arrangements",
        "Climate-Adaptive Makeup",
        "Bridal Party Packages",
      ],
    },
    {
      icon: "fa-star",
      title: "Special Occasions",
      description:
        "Makeup services for engagements, anniversaries, photoshoots, and other memorable events.",
      features: [
        "Red Carpet Glam",
        "Editorial & Creative Makeup",
        "Personalized Style Consultation",
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
            className="text-l text-gray-600 max-w-3xl mx-auto cursor-default"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            From bridal makeup to destination weddings, I offer a range of
            services to make you look and feel your best on your special day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-xl overflow-hidden shadow-lg p-8 "
            >
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
