import { FaRegChartBar, FaShoppingCart, FaUsers, FaClipboardList, FaCalculator, FaChartLine, FaPiggyBank, FaBell, FaSignOutAlt, FaCog } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { useDispatch } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

const Sidebar = () => {
    // const { user } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [menuOpen, setMenuOpen] = useState(false);

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
        <aside className="w-64 bg-black text-white shadow-md p-5 min-h-screen">
            <h2 className="text-2xl font-semibold text-white mb-5">
                Budget
                <span className='text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer transition duration-300'>
                    Buddy
                </span>
            </h2>
            <ul className="space-y-4 mt-10">
                <li className="flex items-center space-x-2 text-white hover:text-[#2a8e9e] cursor-pointer">
                    <Link to="/dashboard" className="flex items-center space-x-2">
                        <FaRegChartBar /> <span>Dashboard</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2 text-white hover:text-[#2a8e9e] cursor-pointer">
                    <Link to="/income" className="flex items-center space-x-2">
                        <FaShoppingCart /> <span>Income</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2 text-white hover:text-[#2a8e9e] cursor-pointer">
                    <Link to="/expense" className="flex items-center space-x-2">
                        <FaUsers /> <span>Expense</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2 text-white hover:text-[#2a8e9e] cursor-pointer">
                    <Link to="/debt" className="flex items-center space-x-2">
                        <FaPiggyBank /> <span>Debt</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2 text-white hover:text-[#2a8e9e] cursor-pointer">
                    <Link to="/reports" className="flex items-center space-x-2">
                        <FaChartLine /> <span>Reports</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2 text-white hover:text-[#2a8e9e] cursor-pointer">
                    <Link to="/categories" className="flex items-center space-x-2">
                        <FaClipboardList /> <span>Categories</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2 text-white hover:text-[#2a8e9e] cursor-pointer">
                    <Link to="/budgets" className="flex items-center space-x-2">
                        <FaCalculator /> <span>Budgets</span>
                    </Link>
                </li>
                <li className="flex items-center space-x-2 text-white hover:text-[#2a8e9e] cursor-pointer">
                    <Link to="/analytics" className="flex items-center space-x-2">
                        <FaChartLine /> <span>Analytics</span>
                    </Link>
                </li> <li className="flex items-center space-x-2 text-white hover:text-[#2a8e9e] cursor-pointer">
                    <Link to="/analytics" className="flex items-center space-x-2">
                        <FaBell /> <span>Notifications</span>
                    </Link>
                </li>
            </ul>
            {/* <div> */}

                <div className="mt-[350px] flex items-center  text-white hover:text-[#2a8e9e] cursor-pointer">
                    <FaSignOutAlt />
                    <Button onClick={logoutHandler} variant="link">Logout</Button>
                </div>
                <div className="flex items-center  text-white hover:text-[#2a8e9e] cursor-pointer">
                    <Link to="/settings" className="flex items-center space-x-2">
                        <FaCog /> <Button>Settings</Button>
                    </Link>
                </div>
            {/* </div> */}
        </aside>

    );
};

export default Sidebar;
