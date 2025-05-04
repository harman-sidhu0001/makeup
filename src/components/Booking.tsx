import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  "booking-name": string;
  "booking-email": string;
  "booking-phone": string;
  "booking-service": string;
  "booking-date": string;
  "booking-message": string;
}

interface Errors {
  "booking-name"?: string;
  "booking-email"?: string;
  "booking-phone"?: string;
  "booking-service"?: string;
  "booking-date"?: string;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    "booking-name": "",
    "booking-email": "",
    "booking-phone": "",
    "booking-service": "",
    "booking-date": "",
    "booking-message": "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData["booking-name"].trim())
      newErrors["booking-name"] = "Please enter your name";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData["booking-email"]))
      newErrors["booking-email"] = "Please enter a valid email";
    if (!formData["booking-phone"].trim())
      newErrors["booking-phone"] = "Please enter your phone number";
    if (!formData["booking-service"])
      newErrors["booking-service"] = "Please select a service";
    if (!formData["booking-date"])
      newErrors["booking-date"] = "Please select a date";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true); // Start submitting, set loading to true

    try {
      const response = await fetch(
        "https://makeupbackend-kdle.onrender.com/api/bookings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setToastMessage(
          "Your booking request has been submitted! We will contact you shortly."
        );
        setShowToast(true);
        setFormData({
          "booking-name": "",
          "booking-email": "",
          "booking-phone": "",
          "booking-service": "",
          "booking-date": "",
          "booking-message": "",
        });
        setTimeout(() => setShowToast(false), 3000);
      } else {
        setToastMessage(
          result.message || "Failed to submit booking. Please try again."
        );
        setShowToast(true);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      setToastMessage("An error occurred. Please try again later.");
      setShowToast(true);
    } finally {
      setIsSubmitting(false); // End submitting, set loading to false
    }
  };

  return (
    <section id="book" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-font text-4xl md:text-5xl font-bold mb-4 cursor-default">
            Ready to Book?
          </h2>
          <p className="text-l text-gray-300 max-w-3xl mx-auto cursor-default">
            Fill out the form below to check availability and reserve your
            appointment.
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="booking-name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="booking-name"
                  name="booking-name"
                  value={formData["booking-name"]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-pink-500 focus:border-pink-500 text-white ${
                    errors["booking-name"] ? "error-input" : ""
                  }`}
                  required
                  disabled={isSubmitting} // Disable input when submitting
                />
                {errors["booking-name"] && (
                  <div className="error">{errors["booking-name"]}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="booking-email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="booking-email"
                  name="booking-email"
                  value={formData["booking-email"]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-pink-500 focus:border-pink-500 text-white ${
                    errors["booking-email"] ? "error-input" : ""
                  }`}
                  required
                  disabled={isSubmitting} // Disable input when submitting
                />
                {errors["booking-email"] && (
                  <div className="error">{errors["booking-email"]}</div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="booking-phone"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="booking-phone"
                  name="booking-phone"
                  value={formData["booking-phone"]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-pink-500 focus:border-pink-500 text-white ${
                    errors["booking-phone"] ? "error-input" : ""
                  }`}
                  required
                  disabled={isSubmitting} // Disable input when submitting
                />
                {errors["booking-phone"] && (
                  <div className="error">{errors["booking-phone"]}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="booking-service"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Service
                </label>
                <select
                  id="booking-service"
                  name="booking-service"
                  value={formData["booking-service"]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-pink-500 focus:border-pink-500 text-white ${
                    errors["booking-service"] ? "error-input" : ""
                  }`}
                  required
                  disabled={isSubmitting} // Disable input when submitting
                >
                  <option value="">Select a service</option>
                  <option value="Bridal Makeup">Bridal Makeup</option>
                  <option value="Bridal Trial">Bridal Trial</option>
                  <option value="Destination Wedding">
                    Destination Wedding
                  </option>
                  <option value="Special Occasion">Special Occasion</option>
                  <option value="Editorial Makeup">Editorial Makeup</option>
                  <option value="Other">Other</option>
                </select>
                {errors["booking-service"] && (
                  <div className="error">{errors["booking-service"]}</div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="booking-date"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="booking-date"
                name="booking-date"
                value={formData["booking-date"]}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-pink-500 focus:border-pink-500 text-white ${
                  errors["booking-date"] ? "error-input" : ""
                }`}
                required
                disabled={isSubmitting} // Disable input when submitting
              />
              {errors["booking-date"] && (
                <div className="error">{errors["booking-date"]}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="booking-message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Additional Details
              </label>
              <textarea
                id="booking-message"
                name="booking-message"
                rows={4}
                value={formData["booking-message"]}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-pink-500 focus:border-pink-500 text-white"
                disabled={isSubmitting} // Disable textarea when submitting
              ></textarea>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-4 rounded-full text-lg font-medium transition duration-300"
                disabled={isSubmitting} // Disable button when submitting
              >
                {isSubmitting ? "Submitting..." : "Submit Booking Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {showToast && <div className="toast show">{toastMessage}</div>}
    </section>
  );
};

export default Booking;
