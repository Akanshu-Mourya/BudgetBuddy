import React from 'react';
import { darkThemeColor } from '../DarkLiteMood/ThemeProvider';

const Contact = () => {
  const labelStyleClass = 'block text-sm font-medium text-gray-700';
  const inputStyleClass = 'w-full mt-2 p-3 border dark:text-[#2a8e9e] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#257c8a]';

  // ✅ Fields Data (Dynamically Rendered using map())
  const formFields = [
    { title: "Your Name", label: "name", type: "text", placeholder: "Enter your name" },
    { title: "Email Address", label: "email", type: "email", placeholder: "Enter your email" },
    { title: "Message", label: "message", type: "textarea", placeholder: "Enter your message" }
  ];

  return (
    <section className={`${darkThemeColor} bg-white py-20`} id="contact-section">
      <div className="container mx-auto px-6 lg:px-20" id="contact">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 dark:text-white">
          Contact Us
        </h2>
        <p className={`${darkThemeColor} text-center text-gray-600 mb-12`}>
          Have any questions or feedback? We'd love to hear from you!
        </p>

        {/* Form Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2  " >
          <form className="bg-gray-100 rounded-lg p-8 shadow-lg w-full max-w-lg  ">
            {/* ✅ Using map() to Generate Form Fields */}
            {formFields.map((field, index) => (
              <FormField
                key={index} // React ke liye unique key
                title={field.title}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                labelStyle={labelStyleClass}
                inputStyle={inputStyleClass}
              />
            ))}

            <button
              type="submit"
              className="bg-[#257c8a] text-white py-3 px-6 rounded-md hover:bg-[#2a8e9e] transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>

          {/* Contact Information */}
          <div className="flex flex-col justify-center items-center text-center md:text-left">
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong> support@budgetbuddy.com
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Phone:</strong> +91 9090909090
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> India
            </p>
            <p className="text-gray-600">
              We're here to help you with any inquiries or concerns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Reusable FormField Component
const FormField = ({ title, label, type, placeholder, labelStyle, inputStyle }) => {
  return (
    <div className="mb-6">
      <label htmlFor={label} className={labelStyle}>
        {title}
      </label>
      {type === "textarea" ? (
        <textarea id={label} placeholder={placeholder} rows="4" className={inputStyle}></textarea>
      ) : (
        <input type={type} id={label} placeholder={placeholder} className={inputStyle} />
      )}
    </div>


  );
};

export default Contact;
