import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FaGoogle, FaFacebook, FaEye } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-4xl flex overflow-hidden rounded-2xl shadow-lg">
        {/* Left Section */}
        <div className="w-1/2 bg-white p-10">
          <h1 className="text-2xl font-semibold text-gray-800">Log in to your Account</h1>
          <p className="text-sm text-gray-500 mt-2">Welcome back! Select a method to log in:</p>

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
            <div>
              <Input
                type="email"
                placeholder="Email"
                className="w-full border-gray-300"
              />
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border-gray-300"
              />
              <FaEye
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <Checkbox />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button className="w-full bg-[#257c8a] text-white hover:bg-[#2a8e9e]">
              Log in
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Create an account
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-[#257c8a] p-10 flex flex-col justify-center items-center text-white">
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
            <img
              src="/images/ProfessionalCollaboration.jpg"
              alt="Integration graphic"
              className="w-32 h-32"
            />
          </div>
          <h2 className="text-xl font-semibold mt-6">Connect with BudgetBuddy</h2>
          <p className="text-center text-sm mt-2">
            Access your account securely and start managing your budget effectively.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;