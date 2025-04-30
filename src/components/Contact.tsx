import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.message.trim())
      newErrors.message = "Please enter your message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setToastMessage("Your message has been sent successfully!");
      setShowToast(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold text-gray-900 mb-4 cursor-default">
            Get In Touch
          </h2>
          <p className="text-l text-gray-600 max-w-3xl mx-auto cursor-default">
            Have questions or ready to book your appointment? Reach out and
            I&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 ${
                    errors.name ? "error-input" : ""
                  }`}
                  required
                />
                {errors.name && <div className="error">{errors.name}</div>}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 ${
                    errors.email ? "error-input" : ""
                  }`}
                  required
                />
                {errors.email && <div className="error">{errors.email}</div>}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                >
                  <option value="">Select a service</option>
                  <option value="Bridal Makeup">Bridal Makeup</option>
                  <option value="Destination Wedding">
                    Destination Wedding
                  </option>
                  <option value="Special Occasion">Special Occasion</option>
                  <option value="Academy Course">Academy Course</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 ${
                    errors.message ? "error-input" : ""
                  }`}
                  required
                ></textarea>
                {errors.message && (
                  <div className="error">{errors.message}</div>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-4 rounded-full text-lg font-medium transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div>
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="heading-font text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-pink-600 text-l mt-1 mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Studio Location
                    </h4>
                    <p className="text-gray-600">
                      123 Beauty Lane, xyz road
                      <br />
                      Amritsar, Punjab
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-pink-600 text-l mt-1 mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">hello@kamnasharma.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-pink-600 text-l mt-1 mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">(+91) 12345-67890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-pink-600 text-l mt-1 mr-4">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Working Hours
                    </h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 6pm
                      <br />
                      Saturday: 10am - 4pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["instagram", "facebook", "pinterest", "youtube"].map(
                    (social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="text-pink-600 hover:text-pink-700 text-2xl"
                      >
                        <i className={`fab fa-${social}`}></i>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showToast && <div className="toast show">{toastMessage}</div>}
    </section>
  );
};

export default Contact;
