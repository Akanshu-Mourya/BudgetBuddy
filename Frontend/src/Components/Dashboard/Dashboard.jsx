import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";
import { setLoading } from "@/redux/authSlice";

const Dashboard = () => {
    const { user, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userData, setUserData] = useState(null);

    // Fetch user data for the dashboard
    const fetchUserData = async () => {
        try {
            dispatch(setLoading(true));
            const response = await axios.get('/api/user/data', { withCredentials: true });
            setUserData(response.data);
        } catch (error) {
            toast.error("Error fetching user data");
            console.error(error);
        } finally {
            dispatch(setLoading(false));
        }
    };

    useEffect(() => {
        if (!user) {
            navigate("/login");
        } else {
            fetchUserData();
        }
    }, [user, navigate]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <Card className="w-full max-w-4xl p-6 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-semibold text-gray-800">Welcome, {user?.name || "User"}!</h1>

                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-gray-700">User Information</h2>
                            <p className="mt-2 text-gray-600">Email: {userData?.email || "Not available"}</p>
                            <p className="text-gray-600">Phone: {userData?.phone || "Not available"}</p>
                        </div>

                        {/* Some actions like settings or logout */}
                        <div className="mt-6 flex gap-4">
                            <Button className="bg-blue-600 text-white">Edit Profile</Button>
                            <Button className="bg-red-600 text-white">Logout</Button>
                        </div>
                    </>
                )}
            </Card>
        </div>
    );
};

export default Dashboard;
