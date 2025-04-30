import { useState } from "react";
import EnrollmentModal from "./EnrollmentModal";

interface Course {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const Academy: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("");

  const openEnrollmentModal = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const courses: Course[] = [
    {
      icon: "fa-graduation-cap",
      title: "Bridal Makeup Mastery",
      description:
        "8-week intensive course covering all aspects of bridal makeup artistry.",
      features: [
        "Color theory & skin tone matching",
        "Long-lasting application techniques",
        "Bridal trial best practices",
      ],
      price: "$299",
    },
    {
      icon: "fa-palette",
      title: "Creative Makeup Artistry",
      description:
        "6-week course exploring avant-garde and editorial makeup techniques.",
      features: [
        "Special effects & transformative makeup",
        "Working with different textures",
        "Creating cohesive looks for photoshoots",
      ],
      price: "$249",
    },
    {
      icon: "fa-business-time",
      title: "Makeup Business Bootcamp",
      description:
        "4-week course teaching you how to build a successful makeup business.",
      features: [
        "Pricing & packaging your services",
        "Marketing & social media strategies",
        "Client management & retention",
      ],
      price: "$199",
    },
  ];

  return (
    <section id="academy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-4 cursor-default"
            data-aos="fade-up"
          >
            Makeup Academy
          </h2>
          <p
            className="text-l text-gray-600 max-w-3xl mx-auto cursor-default"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Learn professional makeup techniques from an industry expert through
            our comprehensive online courses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-default">
          {courses.map((course, index) => (
            <div
              key={index}
              className="academy-card rounded-xl overflow-hidden shadow-lg p-8 flex flex-col justify-between"
            >
              <div>
                <div className="text-pink-600 text-5xl mb-6">
                  <i className={`fas ${course.icon}`}></i>
                </div>
                <h3 className="heading-font text-2xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                <ul className="space-y-2 mb-6 " style={{ height: "150px" }}>
                  {course.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center"
                      data-aos="fade-left"
                      data-aos-duration="1500"
                    >
                      <i className="fas fa-check text-pink-500 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center mt-auto pt-4">
                <span className="text-l font-bold text-gray-900">
                  {course.price}
                </span>
                <button
                  onClick={() => openEnrollmentModal(course.title)}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full text-sm font-medium transition duration-300"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3
                className="heading-font text-3xl font-bold text-gray-900 mb-4"
                data-aos="fade-up"
              >
                Why Choose Our Academy?
              </h3>
              <p
                className="text-gray-600 mb-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                With over 15 years of industry experience, I've distilled my
                knowledge into comprehensive courses that give you practical,
                real-world skills.
              </p>
              <ul className="space-y-3">
                {[
                  "Lifetime access to course materials",
                  "Personalized feedback on assignments",
                  "Exclusive student community",
                  "Professional certification upon completion",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-pink-500 mt-1 mr-3"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Makeup Academy"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div> */}
      </div>
      <EnrollmentModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        courseName={selectedCourse}
      />
    </section>
  );
};

export default Academy;
