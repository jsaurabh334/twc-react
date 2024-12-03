import { useState } from "react";

const ContactForm = () => {
  // For form input state management
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  // Update form data when input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
    // Reset form
    setFormData({
      fullName: "",
      contactNumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="h-[90vh] bg-gradient-to-b from-[#7B3F5F] to-[#C2825D] flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-opacity-70 rounded-lg">
        <h2 className="text-3xl text-yellow-300 font-semibold mb-8 text-center">
          Get In Touch!
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-yellow-200 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter Name"
              className="w-full px-4 py-2 bg-[#4B2043] text-yellow-200 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="mb-6">
            <label htmlFor="contactNumber" className="block text-yellow-200 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full px-4 py-2 bg-[#4B2043] text-yellow-200 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-yellow-200 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 bg-[#4B2043] text-yellow-200 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-yellow-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message"
              className="w-full h-32 px-4 py-2 bg-[#4B2043] text-yellow-200 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#4B2043] text-yellow-300 font-semibold rounded-lg hover:bg-yellow-300 hover:text-[#4B2043] transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
