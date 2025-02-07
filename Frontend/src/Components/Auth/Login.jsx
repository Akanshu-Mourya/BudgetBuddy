import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import axios from "axios";
import { REACT_APP_GOOGLE_CLIENT_ID, USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { darkThemeColor, HandleMessageUIError, HandleMessageUISuccess } from "../DarkLiteMood/ThemeProvider";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [input, setInput] = useState({ email: "", password: "" });

    const { loading, user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const changeEventHandler = (e) => setInput({ ...input, [e.target.name]: e.target.value });

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!input.email || !input.password) {
            toast.error("Please fill in all fields.", HandleMessageUIError());
            return;
        }

        try {
            dispatch(setLoading(true));
            const response = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });

            if (response.data.success) {
                dispatch(setUser(response.data.user));
                navigate("/dashboard");
                toast.success(response.data.message, HandleMessageUISuccess());
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleGoogleSuccess = (response) => {
        const decoded = jwtDecode(response?.credential);
        axios.post(`${USER_API_END_POINT}/login`, { googleToken: response.credential })
            .then((res) => {
                if (res.data.success) {
                    dispatch(setUser(res.data.user));
                    navigate("/dashboard");
                    toast.success(res.data.message, HandleMessageUISuccess());
                }
            })
            .catch(() => toast.error("Google login failed", HandleMessageUIError()));
    };
    const handleGoogleError = (error) => {
        console.log("Google Login Error", error);
        toast.error("Google login failed", HandleMessageUIError());
    };
    useEffect(() => {
        if (user) navigate("/dashboard");
    }, [user, navigate]);

    return (
        <div className={`${darkThemeColor}  flex min-h-screen items-center justify-center bg-gray-100 px-4 sm:px-6`}>
            <Card className={`${darkThemeColor} w-full max-w-4xl flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-2xl dark:shadow-gray-900 dark:hover:shadow-gray-950  bg-white`}>
                {/* Left Section */}
                <div className="w-full md:w-1/2 p-6 md:p-10">
                    <h1 className={`${darkThemeColor} text-xl md:text-2xl font-semibold text-gray-800`}>
                        Log in to your Account
                    </h1>
                    <p className={`${darkThemeColor} text-sm md:text-base text-gray-600 mt-2`}>
                        Welcome back! Choose a login method
                    </p>

                    <div className="flex gap-4 mt-6 justify-center justify-items-center w-full">
                        <Button>
                            <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
                                <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
                            </GoogleOAuthProvider>
                        </Button>

                    </div>

                    <p className="text-center dark:text-gray-300 text-gray-500 font-bold text-sm mt-6">
                        or log in with your email
                    </p>

                    {/* Login Form */}
                    <form className="mt-6 space-y-4" onSubmit={submitHandler}>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="Enter your email"
                            className="w-full border-gray-300 text-sm md:text-base"
                        />

                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                value={input.password}
                                name="password"
                                onChange={changeEventHandler}
                                placeholder="Enter your password"
                                className="w-full border-gray-300 text-sm md:text-base"
                            />
                            <div
                                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-sm md:text-base dark:text-gray-300 text-gray-600">
                                <Checkbox />
                                Remember me
                            </label>
                            <a href="#" className="text-sm text-[#2a99aa]  hover:underline">
                                Forgot Password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <Button
                            type="submit"
                            className="w-full bg-[#257c8a] text-white hover:bg-[#2a8e9e] text-sm md:text-base"
                        >
                            {/* {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Please wait...
                                </>
                            ) : (
                                "Login"
                            )} */}
                            Login
                        </Button>
                    </form>

                    {/* Signup Link */}
                    <p className="text-center text-sm dark:text-gray-300 text-gray-600 mt-3">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-[#2a99aa]  font-bold hover:underline">
                            Register
                        </Link>
                    </p>
                </div>

                {/* Right Section (Hidden on Mobile) */}
                <div className="hidden md:flex w-1/2 bg-[#257c8a] p-6 md:p-10 flex-col justify-center items-center text-white">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center mx-auto">
                        <img
                            src="/images/BudgetBuddyLogo.jpg"
                            alt="Integration graphic"
                            className="w-52 h-48 rounded-full"
                        />
                    </div>
                    <h2 className="text-lg md:text-xl font-bold mt-6 text-center">
                        Connect with BudgetBuddy
                    </h2>
                    <p className="text-sm md:text-base text-center mt-2">
                        Access your account securely and manage your budget effectively.
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Login;