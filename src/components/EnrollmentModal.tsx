import { useState, ChangeEvent, FormEvent } from "react";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  courseName: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  goals: string;
}

const EnrollmentModal: React.FC<Props> = ({
  isOpen,
  closeModal,
  courseName,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    experience: "Beginner",
    goals: "",
  });
  const [toastMessage, setToastMessage] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setToastMessage(
      "Your enrollment request has been submitted! Check your email for next steps."
    );
    setShowToast(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "Beginner",
      goals: "",
    });
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
              Enroll in {courseName}
            </h3>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times">X</i>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="course" value={courseName} />
            <div>
              <label
                htmlFor="enroll-name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="enroll-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="enroll-email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="enroll-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="enroll-phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="enroll-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            <div>
              <label
                htmlFor="enroll-experience"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Makeup Experience Level
              </label>
              <select
                id="enroll-experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Professional">Professional</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="enroll-goals"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Learning Goals
              </label>
              <textarea
                id="enroll-goals"
                name="goals"
                rows={3}
                value={formData.goals}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"
              ></textarea>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg font-medium transition duration-300"
              >
                Enroll Now
              </button>
            </div>
          </form>
        </div>
      </div>
      {showToast && <div className="toast show">{toastMessage}</div>}
    </>
  );
};

export default EnrollmentModal;
