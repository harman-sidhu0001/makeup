import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface GalleryItem {
  img: string;
  title: string;
  description: string;
}

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      title: "Traditional Bridal",
      description: "Classic bridal look with soft smokey eyes and nude lips",
    },
    {
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      title: "Editorial Glam",
      description: "High-fashion makeup for magazine shoots",
    },
    {
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      title: "Beach Wedding",
      description: "Natural makeup that withstands tropical humidity",
    },
    {
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      title: "Bridal Party",
      description: "Coordinated looks for the entire wedding party",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      title: "Natural Beauty",
      description: "Enhancing natural features with minimal makeup",
    },
    {
      img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      title: "Creative Expression",
      description: "Artistic makeup for special events and photoshoots",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-4 cursor-default"
            data-aos="fade-up"
          >
            My Portfolio
          </h2>
          <p
            className="text-l text-gray-600 max-w-3xl mx-auto cursor-default"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Browse through my recent work to see the transformations I&apos;ve
            created for my beautiful clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item relative group overflow-hidden rounded-lg cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <div className="relative w-full h-80">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:blur-sm transition duration-300"
                />
              </div>
              <div
                className={`absolute inset-0 flex items-center justify-center transition duration-300 ${
                  activeIndex === index
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div
                  className="text-center text-white p-4 cursor-default"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3 className="heading-font text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <Link
            href="#contact"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-lg font-medium transition duration-300"
          >
            Request Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
