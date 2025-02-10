import React, { useState } from "react";

const AddExpance = () => {
  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    description: "",
    paymentMethod: "UPI",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Expense Data Submitted:", formData);
  };

  const LabelStyle = "block font-semibold text-gray-700 dark:text-gray-300";
  const InputStyle =
    "w-full p-2 border focus:ring focus:ring-[#1b5d6a] dark:bg-gray-700 dark:text-white rounded-md transition";

  return (
    <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-700 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-gray-100 dark:bg-gray-800 rounded-lg shadow-2xl dark:shadow-gray-900 dark:hover:shadow-gray-950 border dark:border-white">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
            Add Expense
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <AddComponent
              label="Amount"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              LabelStyle={LabelStyle}
              InputStyle={InputStyle}
              required={true}
            />

            <AddComponent
              label="Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              LabelStyle={LabelStyle}
              InputStyle={InputStyle}
              required={true}
            />

            <div>
              <label className={LabelStyle}>Payment Method:</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className={InputStyle}
              >
                <option value="UPI">UPI</option>
                <option value="Banking">Banking</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <AddComponent
              label="Category"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              LabelStyle={LabelStyle}
              InputStyle={InputStyle}
              required={true}
            />

            <AddComponent
              label="Description"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              LabelStyle={LabelStyle}
              InputStyle={`${InputStyle} h-20`}
              required={true}
            />


            <button
              type="submit"
              className="w-full bg-[#257c8a] hover:bg-[#1b5d6a] text-white font-bold p-2 rounded-sm transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center bg-gray-200 dark:bg-gray-700 border dark:border-white">
          <img
            src="/images/Expance.jpg"
            alt="Expense"
            className="max-w-128 h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

const AddComponent = ({
  label,
  type,
  LabelStyle,
  name,
  value,
  onChange,
  InputStyle,
  required,
}) => {
  return (
    <div>
      <label className={LabelStyle}>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={InputStyle}
        required={required}
      />
    </div>
  );
};

export { AddExpance, AddComponent };
