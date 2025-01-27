import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-4xl flex overflow-hidden rounded-2xl shadow-lg">
        {/* Left Section */}
        <div className="w-1/2 bg-white p-10">
          <h1 className="text-2xl font-semibold text-gray-800">Create Your Account</h1>
          <p className="text-sm text-gray-500 mt-2">
            Join us and enjoy all the benefits!
          </p>

          <div className="flex gap-4 mt-6">
                      <Button className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200">
                        <FaGoogle className="mr-2" /> Google
                      </Button>
                      <Button className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200">
                        <FaFacebook className="mr-2" /> Facebook
                      </Button>
                    </div>
          
                    <p className="text-center text-gray-500 text-sm mt-6">or continue with email</p>
          
 
          <form className="mt-6 space-y-4">
            {/* Name Input */}
            <div>
              <Input
                type="text"
                placeholder="Full Name"
                className="w-full border-gray-300"
              />
            </div>

            {/* Email Input */}
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="w-full border-gray-300"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border-gray-300"
              />
              <div
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full border-gray-300"
              />
              <div
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-[#257c8a] text-white hover:bg-[#2a8e9e]">
              Sign Up
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-[#257c8a] p-10 flex flex-col justify-center items-center text-white">
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
            <img
              src="/images/BudgetBuddyLogo.jpg"
              alt="Integration graphic"
              className="w-40 h-40 rounded-full"
            />
          </div>
          <h2 className="text-xl font-semibold mt-6">Explore New Opportunities</h2>
          <p className="text-center text-sm mt-2">
            Join BudgetBuddy and begin your path to smarter financial management.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;