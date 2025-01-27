import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import axios from "axios";

const SignUp = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const [errors, setErrors] = useState({});
  const { loading, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

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

  const submitHandler = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Log input to ensure proper data structure
    // console.log(input);

    try {
      dispatch(setLoading(true));

      const formData = new FormData();
      formData.append("fullName", input.name);
      formData.append("email", input.email);
      formData.append("phoneNumber", input.phoneNumber);
      formData.append("password", input.password);

      // console.log(formData);
      // for (let [key, value] of formData.entries()) {
      //   console.log(`${key}: ${value}`);
      // }

      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error(error?.response?.data?.message || "An error occurred");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/register");
    }
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 flex-col md:flex-row">
      <Card className="w-full max-w-4xl flex overflow-hidden rounded-2xl shadow-lg">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-white p-10">
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

          <form onSubmit={submitHandler} className="mt-6 space-y-4">
            {/* Name Input */}
            <div>
              <Input
                type="text"
                value={input.name}
                name="name"
                onChange={changeEventHandler}
                placeholder="Full Name"
                className="w-full border-gray-300"
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
                className="w-full border-gray-300"
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
                className="w-full border-gray-300"
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
                className="w-full border-gray-300"
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
            {loading ? (
              <Button className="w-full bg-[#257c8a] text-white hover:bg-[#2a8e9e]">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait...
              </Button>
            ) : (
              <Button type="submit" className="w-full bg-[#257c8a] text-white hover:bg-[#2a8e9e]">
                Signup
              </Button>
            )}
          </form>

          <span className="flex justify-center text-sm text-gray-600 mt-3">
            Already have an account?
            <Link to="/login" className="text-blue-700"> Log in</Link>
          </span>
        </div>

        {/* Right Section (Hidden on Mobile, Visible on Larger Screens) */}
        <div className="w-1/2 md:block hidden bg-[#257c8a] p-10 flex flex-col justify-center items-center text-white">
          <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mt-10 mx-auto">
            <img
              src="/images/BudgetBuddyLogo.jpg"
              alt="Integration graphic"
              className="w-40 h-40 rounded-full"
            />
          </div>
          <div className="text-center mt-6">
            <h2 className="text-xl font-semibold mt-6">Explore New Opportunities</h2>
            <p className="text-center text-sm mt-2">
              Join BudgetBuddy and begin your path to smarter financial management.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignUp;
