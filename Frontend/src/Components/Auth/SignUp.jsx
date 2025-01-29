import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { REACT_APP_GOOGLE_CLIENT_ID, USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const SignUp = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { loading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form input change
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!input.name) newErrors.name = "Name is required";
    if (!input.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!input.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    }
    if (!input.password) {
      newErrors.password = "Password is required";
    } else if (input.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      dispatch(setLoading(true));

      const formData = new FormData();
      formData.append("fullName", input.name);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);

      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      dispatch(setLoading(false));
    }
  };

  // Handle Google login success
  const handleGoogleSuccess = async (response) => {
    const decoded = jwtDecode(response.credential);
    const { name, email, sub } = decoded;

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, {
        fullName: name,
        email,
        googleSub: sub, // Store Google's unique ID
        isGoogleUser: true, // Flag to indicate Google login
      });

      if (res.data.success) {
        toast.success("Google registration successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Google registration failed");
    }
  };

  // Handle Google login error
  const handleGoogleError = (error) => {
    console.log("Google Login Error", error);
    toast.error("Google login failed");
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 sm:px-6">
      <Card className="w-full max-w-4xl flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-lg bg-white">
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10">

          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
            Create Your Account                    </h1>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Join us and enjoy all the benefits!          </p>
          {/* Google and Facebook Buttons */}
          <div className="flex justify-start mt-6">
            <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
              <GoogleLogin onSuccess={handleGoogleSuccess} />
            </GoogleOAuthProvider>
          </div>
          <p className="text-center text-gray-500 font-bold text-sm mt-6">
            or register with your email
          </p>
          {/* Email/Password Form */}
          <form onSubmit={submitHandler} className="mt-6 space-y-4">
            {/* Name Input */}
            <div>
              <Input
                type="text"
                value={input.name}
                name="name"
                onChange={changeEventHandler}
                placeholder="Full Name"
                className="w-full border-gray-300 text-sm md:text-base"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email Input */}
            <div>
              <Input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="Email"
                className="w-full border-gray-300 text-sm md:text-base"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone Number Input */}
            <div>
              <Input
                type="text"
                value={input.phoneNumber}
                name="phoneNumber"
                onChange={changeEventHandler}
                placeholder="Phone Number"
                className="w-full border-gray-300 text-sm md:text-base"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>

            {/* Password Input */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Password"
                className="w-full border-gray-300 text-sm md:text-base"
              />
              <div
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#257c8a] text-white hover:bg-[#2a8e9e] text-sm md:text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </form>

          <span className="flex justify-center text-sm text-gray-600 mt-3">
            Already have an account?
            <Link to="/login" className="text-blue-700"> Log in</Link>
          </span>
        </div>

        <div className="hidden md:flex w-1/2 bg-[#257c8a] p-6 md:p-10 flex-col justify-center items-center text-white">
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mx-auto">
            <img
              src="/images/BudgetBuddyLogo.jpg"
              alt="Integration graphic"
              className="w-52 h-48 rounded-full"
            />
          </div>
          <h2 className="text-lg md:text-xl font-bold mt-6 text-center">
            Explore New Opportunities
          </h2>
          <p className="text-sm md:text-base text-center mt-2">
            Join BudgetBuddy and begin your path to smarter financial management.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
