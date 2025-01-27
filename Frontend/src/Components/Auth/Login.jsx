import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [input, setInput] = useState({
        email: "",
        password: "",
    });

    const { loading, user } = useSelector((state) => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const response = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json",
                }, withCredentials: true
            });
            if (response.data.success) {
                dispatch(setUser(response.data.user));
                navigate("/dashboard");
                toast.success(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(() => {
        if (user) {
            navigate("/register");
        }
    }, [user, navigate]);
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Card className="w-full max-w-4xl flex overflow-hidden rounded-2xl shadow-lg">
                {/* Left Section */}
                <div className="w-full md:w-1/2 bg-white p-10">
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

                    <form className="mt-6 space-y-4" onSubmit={submitHandler}>
                        <div>
                            <Input
                                type="email"
                                value={input.email}
                                name="email"
                                onChange={changeEventHandler}
                                placeholder="Enter an Email"
                                className="w-full border-gray-300"
                            />
                        </div>

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
                        Don’t have an account?{" "}
                        <Link to="/register" className='text-blue-600 hover:underline'>
                            Create an account
                        </Link>
                    </span>
                </div>

                {/* Right Section (Hidden on Mobile, Visible on Larger Screens) */}
                <div className="md:block hidden  w-1/2 bg-[#257c8a] p-10 flex flex-col justify-center items-center text-white">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mt-10 mx-auto">
                        <img
                            src="/images/BudgetBuddyLogo.jpg"
                            alt="Integration graphic"
                            className="w-40 h-40 rounded-full"
                        />
                    </div>
                    <div className="text-center mt-6">
                        <h2 className="text-xl font-semibold mt-6">Connect with BudgetBuddy</h2>
                        <p className="text-center text-sm mt-2">
                            Access your account securely and start managing your budget effectively.
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Login;
