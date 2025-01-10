import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu">
                    <li> <NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li> <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li> <NavLink to="/dashboard/review"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                    <li> <NavLink to="/dashboard/review"><FaAd></FaAd> Add a review</NavLink></li>
                    <li> <NavLink to="/dashboard/booking"><FaList></FaList> My Bookings</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;