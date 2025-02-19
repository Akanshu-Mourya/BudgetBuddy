import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { INCOME_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { HandleMessageUIError, HandleMessageUISuccess } from "../DarkLiteMood/ThemeProvider";
import { setLoading } from "@/redux/authSlice";

const AddIncome = () => {
    const token = localStorage.getItem('token');
    const [formData, setFormData] = useState({
        amount: "",
        date: "",
        category: "",
        description: "",
        paymentMethod: "UPI",
        otherPaymentMethod: "", // New state for "Other"
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            toast.error("Unauthorized: Please log in first.");
            return;
        }

        dispatch(setLoading(true));

        try {
            const payload = {
                ...formData,
                paymentMethod: formData.paymentMethod === "Other" ? formData.otherPaymentMethod : formData.paymentMethod,
            };

            const response = await axios.post(
                `${INCOME_API_END_POINT}/addIncome`,
                payload, // Sending as JSON
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            if (response.data.success) {
                toast.success(response.data.message, HandleMessageUISuccess());
                navigate("/dashboard");
            }
        } catch (error) {
            console.error("Network Error:", error);
            toast.error(error?.response?.data?.message || "Something went wrong", HandleMessageUIError());
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-white dark:bg-gray-700 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-5xl bg-gray-100 dark:bg-gray-800 rounded-lg 
                shadow-lg dark:shadow-2xl">
                
                <div className="w-full md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
                        Add Income
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <AddComponent label="Amount" type="number" name="amount" value={formData.amount} onChange={handleChange} required />
                        <AddComponent label="Date" type="date" name="date" value={formData.date} onChange={handleChange} required />

                        <div>
                            <label className="block font-semibold text-gray-700 dark:text-gray-300">Payment Method:</label>
                            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className="w-full p-2 border border-gray-300 dark:border-none focus:ring focus:ring-[#257c8a] dark:bg-gray-700 dark:text-white rounded-md transition">
                                <option value="UPI">UPI</option>
                                <option value="Banking">Banking</option>
                                <option value="Cash">Cash</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Show input when "Other" is selected */}
                        {formData.paymentMethod === "Other" && (
                            <AddComponent
                                label="Enter Payment Method"
                                type="text"
                                name="otherPaymentMethod"
                                value={formData.otherPaymentMethod}
                                onChange={handleChange}
                                required
                            />
                        )}

                        <AddComponent label="Category" type="text" name="category" value={formData.category} onChange={handleChange} required />
                        <AddComponent label="Description" type="text" name="description" value={formData.description} onChange={handleChange} required className="h-20" />

                        <button type="submit" className="w-full bg-[#257c8a] hover:bg-[#1b5d6a] text-white font-bold p-2 rounded-sm transition">
                            Submit
                        </button>
                    </form>
                </div>

                <div className="hidden md:flex md:w-1/2 justify-center items-center bg-gray-200 dark:bg-gray-700 
                    shadow-md dark:shadow-2xl">
                    <img src="/images/Income4.png" alt="Income" className="max-w-128 h-full w-full rounded-tr rounded-br" />
                </div>
            </div>
        </div>
    );
};

const AddComponent = ({ label, type, name, value, onChange, required, className = "" }) => {
    return (
        <div>
            <label className="block font-semibold text-gray-700 dark:text-gray-300">{label}:</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full p-2 border border-gray-300 dark:border-none focus:ring focus:ring-[#257c8a] 
                dark:bg-gray-700 dark:text-white rounded-md shadow-sm dark:shadow-md dark:shadow-gray-700 transition ${className}`}
                required={required}
            />
        </div>
    );
};

export { AddIncome, AddComponent };
