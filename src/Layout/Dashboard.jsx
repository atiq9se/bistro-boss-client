import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    
    const [isAdmin] = useAdmin();
    

    return (
        <div className="flex">
            <div className="w-64 min-h-full bg-orange-800">
                <ul className="menu">

                    {
                        isAdmin ? <>
                           <li> <NavLink to="/dashboard/AdminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                        </>
                        :
                        <>
                          <li> <NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                        </>
                    }
                    <li> <NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li> <NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li> <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart{cart.length}</NavLink></li>
                    <li> <NavLink to="/dashboard/paymentHistory"><FaList></FaList>Payment History</NavLink></li>
                    <li> <NavLink to="/dashboard/adminHome"><FaAd></FaAd> Admin Home</NavLink></li>
                    <li> <NavLink to="/dashboard/addItems"><FaList></FaList> Add items</NavLink></li>
                    <li> <NavLink to="/dashboard/manageItems"><FaList></FaList>Manage Items</NavLink></li>
                    <li> <NavLink to="/dashboard/manage"><FaList></FaList>Manage booking</NavLink></li>
                    <li> <NavLink to="/dashboard/users"><FaUser></FaUser>All users</NavLink></li>
                    <div className="divider"></div>
                    <li> <NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                    <li> <NavLink to="/order/salad"><FaSearch></FaSearch>Menu</NavLink></li>
                    <li> <NavLink to="/order/contact"><FaEnvelope></FaEnvelope> Contact</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;