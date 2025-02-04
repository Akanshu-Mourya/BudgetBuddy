import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Home, Briefcase, Settings, Menu, BarChart, FileText, Tag, LogOut } from "lucide-react";
import { FaMoneyBillWave, FaShoppingCart } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { MdAttachMoney } from "react-icons/md";
import { SidebarAccordion, SidebarElement } from "./SidebarAccordion";
import { darkThemeColor } from "../DarkLiteMood/ThemeProvider";
import { useDispatch } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import axios from "axios";

const sidebardarktheme = ' dark:bg-gray-900 text-white';


const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);


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

    const Effact = 'flex  items-center gap-5 p-1 rounded-md hover:bg-[#257c8a] hover:text-white transition ';
    const AccordionEffact = 'px-10 text-[17px] flex  items-center  p-1 rounded-md hover:bg-gray-300  hover:text-black transition ';
    return (
        <div className={`flex `}>
            {/* Mobile Sidebar */}
            <Sheet>
                <SheetTrigger asChild>
                    <button className={`p-2 md:hidden bg-[#257c8a]  text-white `}>
                        <Menu size={24} />
                    </button>
                </SheetTrigger>

                <SheetContent side="left" className="text-black bg-white h-full flex flex-col ">
                    <div className="flex gap-3 p-2">
                        <h1 className='text-2xl font-bold'>
                            Budget
                            <span className='text-[#2a8e9e] hover:text-[#257c8a] cursor-pointer transition duration-300'>
                                Buddy
                            </span>
                        </h1>
                    </div>
                    <nav className="space-y-2 text-xl flex-grow">
                       
                    <SidebarElement
                        title="Dashboard"
                        effectClass={Effact}
                        icon={Home}
                        links={[
                            {
                                path: "/dashboard",
                            }
                        ]}

                    />
                    <SidebarAccordion
                        title="Income"
                        icon={MdAttachMoney}
                        effectClass={Effact}
                        accordionEffact={AccordionEffact}
                        links={[
                            { path: "/dashboard/income", label: "Add Income"  },
                            { path: "/dashboard/income/get", label: "Get Income" },
                            { path: "/dashboard/income/update", label: "Update Income" },
                            { path: "/dashboard/income/delete", label: "Delete Income" }

                        ]} />

                    <SidebarAccordion
                        title="Expense"
                        icon={FaShoppingCart}
                        effectClass={Effact}
                        accordionEffact={AccordionEffact}
                        links={[
                            { path: "/dashboard/expense", label: "Add expense" },
                            { path: "/dashboard/expense/get", label: "Get expense" },
                            { path: "/dashboard/expense/update", label: "Update expense" },
                            { path: "/dashboard/expense/delete", label: "Delete expense" }

                        ]}

                    />
                    <SidebarAccordion
                        title="Expense"
                        icon={Briefcase}
                        effectClass={Effact}
                        accordionEffact={AccordionEffact}
                        links={[
                            { path: "/dashboard/debt", label: "Add debt" },
                            { path: "/dashboard/debt/get", label: "Get debt" },
                            { path: "/dashboard/debt/update", label: "Update debt" },
                            { path: "/dashboard/debt/delete", label: "Delete debt" }

                        ]}

                    />


                    <SidebarElement
                        title="Reports"
                        effectClass={Effact}
                        icon={FileText}
                        links={[
                            {
                                path: "/dashboard/reports",
                            }
                        ]}

                    />
                    <SidebarElement
                        title="Categories"
                        effectClass={Effact}
                        icon={Tag}
                        links={[
                            {
                                path: "/dashboard/categories",
                            }
                        ]}

                    />
                    <SidebarElement
                        title="Analytics"
                        effectClass={Effact}
                        icon={BarChart}
                        links={[
                            {
                                path: "/dashboard/analytics",
                            }
                        ]}

                    />
                    </nav>

                    {/* Move Settings and Logout to the bottom */}
                    <div className="mt-auto space-y-2 text-xl">
                    <SidebarElement
                        title="Settings"
                        effectClass={Effact}
                        icon={Settings}
                        links={[
                            {
                                path: "/dashboard/settings",
                            }
                        ]}

                    />
                    <SidebarElement
                        title="Logout"
                        effectClass={Effact}

                        icon={LogOut}
                        links={[
                            {
                                onClick: logoutHandler,
                            }
                        ]}

                    />
                      
                    </div>
                </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <aside className={cn(` dark:bg-gray-800 hidden md:flex flex-col bg-gray-100 h-screen   p-9 transition-all`, collapsed ? "w-28" : "w-72")}>
                <div className="flex gap-3">
                    {/* <button onClick={() => setCollapsed(!collapsed)} className="p-2 self-end rounded-md bg-[#257c8a] text-white">
                        <Menu size={24} />
                    </button> */}
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
                    <SidebarElement
                        title="Dashboard"
                        collapsed={collapsed}
                        effectClass={Effact}
                        icon={Home}
                        links={[
                            {
                                path: "/dashboard",
                            }
                        ]}
                    />
                    <SidebarAccordion
                        title="Income"
                        icon={MdAttachMoney}
                        collapsed={collapsed}
                        effectClass={Effact}
                        accordionEffact={AccordionEffact}
                        links={[
                            { path: "/dashboard/income", label: "Add Income" },
                            { path: "/dashboard/income/get", label: "Get Income" },
                            { path: "/dashboard/income/update", label: "Update Income" },
                            { path: "/dashboard/income/delete", label: "Delete Income" }

                        ]} />

                    <SidebarAccordion
                        title="Expense"
                        icon={FaShoppingCart}
                        collapsed={collapsed}
                        effectClass={Effact}
                        accordionEffact={AccordionEffact}
                        links={[
                            { path: "/dashboard/expense", label: "Add expense" },
                            { path: "/dashboard/expense/get", label: "Get expense" },
                            { path: "/dashboard/expense/update", label: "Update expense" },
                            { path: "/dashboard/expense/delete", label: "Delete expense" }

                        ]}

                    />
                    <SidebarAccordion
                        title="Expense"
                        icon={Briefcase}
                        collapsed={collapsed}
                        effectClass={Effact}
                        accordionEffact={AccordionEffact}
                        links={[
                            { path: "/dashboard/debt", label: "Add debt" },
                            { path: "/dashboard/debt/get", label: "Get debt" },
                            { path: "/dashboard/debt/update", label: "Update debt" },
                            { path: "/dashboard/debt/delete", label: "Delete debt" }

                        ]}

                    />


                    <SidebarElement
                        title="Reports"
                        effectClass={Effact}
                        collapsed={collapsed}

                        icon={FileText}
                        links={[
                            {
                                path: "/dashboard/reports",
                            }
                        ]}

                    />
                    <SidebarElement
                        title="Categories"
                        collapsed={collapsed}
                        effectClass={Effact}
                        icon={Tag}
                        links={[
                            {
                                path: "/dashboard/categories",
                            }
                        ]}

                    />
                    <SidebarElement
                        title="Analytics"
                        collapsed={collapsed}
                        effectClass={Effact}
                        icon={BarChart}
                        links={[
                            {
                                path: "/dashboard/analytics",
                            }
                        ]}

                    />

                </nav>
                <nav className="mt-auto space-y-2 text-xl">
                  
                <SidebarElement
                        title="Settings"
                        collapsed={collapsed}
                        effectClass={Effact}
                        icon={Settings}
                        links={[
                            {
                                path: "/dashboard/settings",
                            }
                        ]}

                    />
                    <SidebarElement
                        title="Logout"
                        collapsed={collapsed}
                        effectClass={Effact}
                        icon={LogOut}
                        links={[
                            {
                                onClick: logoutHandler,
                            }
                        ]}

                    />

                    
                    
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;





