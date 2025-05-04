import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface GalleryItem {
  img: string;
  title: string;
  description: string;
  marginTop: string;
}

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      img: "/photo13.jpg",
      title: "Radiant Muse",
      description:
        "Soft glam with glowing skin and subtle drama for timeless elegance",
      marginTop: "0px",
    },
    {
      img: "/photo6.jpg",
      title: "Ethereal Grace",
      description:
        "Dreamy tones and delicate details perfect for day weddings or receptions",
      marginTop: "0px",
    },
    {
      img: "/photo3.jpg",
      title: "Editorial Glam",
      description: "High-fashion makeup for magazine shoots",
      marginTop: "0px",
    },
    {
      img: "/photo2.jpg",
      title: "Royal Vows",
      description:
        "Opulent bridal look inspired by regal traditions and elegance",
      marginTop: "0px",
    },
    {
      img: "/photo7.jpg",
      title: "Creative Expression",
      description: "Artistic makeup for special events and photoshoots",
      marginTop: "0px",
    },
    {
      img: "/photo4.jpg",
      title: "Bridal Party",
      description: "Coordinated looks for the entire wedding party",
      marginTop: "0px",
    },
    {
      img: "/photo5.jpg",
      title: "Natural Beauty",
      description: "Enhancing natural features with minimal makeup",
      marginTop: "0px",
    },
    {
      img: "/photo9.jpg",
      title: "Bridal Bloom",
      description:
        "Flawless bridal look blending tradition with modern sophistication",
      marginTop: "-20px",
    },
    {
      img: "/photo10.jpg",
      title: "Creative Expression",
      description: "Artistic makeup for special events and photoshoots",
      marginTop: "0px",
    },
    {
      img: "/photo11.jpg",
      title: "Timeless Bride",
      description:
        "Classic Indian bridal glam with rich tones and radiant skin",
      marginTop: "0px",
    },
    {
      img: "/photo12.jpg",
      title: "Blush & Tikka",
      description: "Delicate pair with classic red bridal charm",
      marginTop: "-35px",
    },
    {
      img: "/photo14.jpg",
      title: "Creative Expression",
      description: "Artistic makeup for special events and photoshoots",
      marginTop: "0px",
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
                  // sizes="(max-width: 768px) 100vw, 50vw"
                  width={500}
                  height={0}
                  className="object-cover group-hover:blur-sm transition duration-300"
                  style={{ marginTop: item.marginTop }}
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
