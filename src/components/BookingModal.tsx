import { useState, ChangeEvent, FormEvent } from "react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  serviceName: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
}

const BookingModal: React.FC<Props> = ({ isOpen, closeModal, serviceName }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToastMessage(
      "Your booking request has been submitted! We will contact you shortly."
    );
    setShowToast(true);
    setFormData({ name: "", email: "", phone: "", date: "", message: "" });
    setTimeout(() => {
      setShowToast(false);
      closeModal();
    }, 3000);
  };

  return (
    <>
      <div className={`modal ${isOpen ? "show" : ""}`}>
        <div className="modal-content">
          <div className="flex justify-between items-center mb-6">
            <h3 className="heading-font text-2xl font-bold text-gray-900">
              Book {serviceName}
            </h3>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times">X</i>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="service" value={serviceName} />
            <div>
              <label
                htmlFor="modal-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="modal-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="modal-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="modal-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="modal-phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="modal-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="modal-date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Preferred Date
              </label>
              <input
                type="date"
                id="modal-date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="modal-message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Special Requests
              </label>
              <textarea
                id="modal-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
              ></textarea>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg font-medium transition duration-300"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>
      </div>
      {showToast && <div className="toast show">{toastMessage}</div>}
    </>
  );
};

export default BookingModal;
