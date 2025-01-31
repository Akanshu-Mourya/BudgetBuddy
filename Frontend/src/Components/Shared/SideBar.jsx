import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Home, Briefcase, Settings, Menu, BarChart, FileText, Tag, LogOut } from "lucide-react";
import { FaMoneyBillWave, FaShoppingCart } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { MdAttachMoney } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/authSlice";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const Effact = 'flex items-center gap-3 p-1 rounded-md hover:bg-[#257c8a] hover:text-white transition';
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate('/');
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'An error occurred');
        }
    };
    return (
        <div className="flex">
            {/* Mobile Sidebar */}
            <Sheet>
                <SheetTrigger asChild>
                    <button className={`p-2 md:hidden bg-[#257c8a] text-white`}>
                        <Menu size={24} />
                    </button>
                </SheetTrigger>

                <SheetContent side="left" className="text-black bg-white h-full flex flex-col">
                    <div className="flex gap-3 p-3">
                        <h1 className='text-2xl font-bold'>
                            Budget
                            <span className='text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer transition duration-300'>
                                Buddy
                            </span>
                        </h1>
                    </div>
                    <nav className="space-y-2 text-xl flex-grow">
                        <Link to="/dashboard" className={Effact}>
                            <Home size={24} />
                            Dashboard
                        </Link>
                        <Link to="/dashboard/income" className={Effact}>
                            <MdAttachMoney size={24} />
                            Income
                        </Link>
                        <Link to="/dashboard/expense" className={Effact}>
                            <FaShoppingCart size={24} />
                            Expense
                        </Link>
                        <Link to="/dashboard/debt" className={Effact}>
                            <Briefcase size={24} />
                            Debt
                        </Link>
                        <Link to="/dashboard/reports" className={Effact}>
                            <FileText size={24} />
                            Reports
                        </Link>
                        <Link to="/dashboard/categories" className={Effact}>
                            <Tag size={24} />
                            Categories
                        </Link>
                        <Link to="/dashboard/analytics" className={Effact}>
                            <BarChart size={24} />
                            Analytics
                        </Link>
                    </nav>

                    {/* Move Settings and Logout to the bottom */}
                    <div className="mt-auto space-y-2 text-xl">
                        <Link to="/dashboard/settings" className={Effact}>
                            <Settings size={24} />
                            Settings
                        </Link>
                        <Link onClick={logoutHandler} className={Effact}>
                            <LogOut size={24} />
                            Logout
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <aside className={cn("hidden md:flex flex-col bg-gray-100 h-screen p-4 transition-all", collapsed ? "w-16" : "w-64")}>
                <div className="flex gap-7">
                    <button onClick={() => setCollapsed(!collapsed)} className="p-2 self-end rounded-md bg-[#257c8a] text-white">
                        <Menu size={24} />
                    </button>
                    {!collapsed && (
                        <h1 className='text-2xl font-bold transition duration-100'>
                            Budget
                            <span className='text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer transition duration-300'>
                                Buddy
                            </span>
                        </h1>
                    )}
                </div>
                <nav className="mt-4 space-y-4 text-xl">
                    <Link to="/dashboard" className={Effact}>
                        <Home size={24} />
                        {!collapsed && "Dashboard"}
                    </Link>
                    <Link to="/dashboard/income" className={Effact}>
                        <MdAttachMoney size={24} />
                        {!collapsed && "Income"}
                    </Link>
                    <Link to="/dashboard/expense" className={Effact}>
                        <FaShoppingCart size={24} />
                        {!collapsed && "Expense"}
                    </Link>
                    <Link to="/dashboard/debt" className={Effact}>
                        <Briefcase size={24} />
                        {!collapsed && "Debt"}
                    </Link>
                    <Link to="/dashboard/reports" className={Effact}>
                        <FileText size={24} />
                        {!collapsed && "Reports"}
                    </Link>
                    <Link to="/dashboard/categories" className={Effact}>
                        <Tag size={24} />
                        {!collapsed && "Categories"}
                    </Link>
                    <Link to="/dashboard/analytics" className={Effact}>
                        <BarChart size={24} />
                        {!collapsed && "Analytics"}
                    </Link>
                </nav>
                <nav className="mt-auto space-y-2 text-xl">
                    <Link to="/dashboard/settings" className={Effact}>
                        <Settings size={24} />
                        {!collapsed && "Settings"}
                    </Link>
                    <Link onClick={logoutHandler} className={`${Effact}`}>
                        <LogOut size={24} />
                        {!collapsed && "Logout"}
                    </Link>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
