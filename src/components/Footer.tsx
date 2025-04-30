import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="heading-font text-2xl font-bold text-pink-500 mb-6">
              Kamna Sharma
            </h3>
            <p className="text-gray-400 mb-6">
              Professional makeup artistry and education to help you look and
              feel your most beautiful.
            </p>
            <div className="flex space-x-4">
              {["instagram", "facebook", "pinterest", "youtube"].map(
                (social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-pink-500 text-l"
                  >
                    <i className={`fab fa-${social}`}></i>
                  </a>
                )
              )}
            </div>
          </div>
          <div>
            <h4 className="heading-font text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "home",
                "services",
                "gallery",
                "academy",
                "testimonials",
                "contact",
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={`#${link}`}
                    className="text-gray-400 hover:text-pink-500 transition duration-300"
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="heading-font text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Bridal Makeup",
                "Destination Weddings",
                "Special Occasions",
                "Editorial Makeup",
                "Makeup Trials",
                "Group Bookings",
              ].map((service, index) => (
                <li key={index}>
                  <span className="cursor-pointer text-gray-400 hover:text-pink-500 transition duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="heading-font text-lg font-bold mb-6">
              Contact Info
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-pink-500 mt-1 mr-3"></i>
                <span>
                  123 Beauty Lane, xyz road
                  <br />
                  Amritsar, Punjab
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-pink-500 mr-3"></i>
                <span>hello@kamnasharma.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-pink-500 mr-3"></i>
                <span>(+91) 12345-67890</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-pink-500 mr-3"></i>
                <span>
                  Mon-Fri: 9am-6pm
                  <br />
                  Sat: 10am-4pm
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Kamna Sharma Academy. All rights reserved.
            </p>
            {/* <div className="flex space-x-6">
              {["Privacy Policy", "Terms of Service", "FAQ"].map(
                (link, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-gray-500 hover:text-pink-500 text-sm transition duration-300"
                  >
                    {link}
                  </Link>
                )
              )}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
