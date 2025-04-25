import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaDollarSign, FaUsers } from "react-icons/fa";


const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: stats, isLoading} = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    console.log(stats)
    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <h2 className="text-3xl">Hi welcome { user?.displayName ? user.displayName: 'Back'}</h2>
            <div className="stats shadow">
            <div className="stat">
                <div className="stat-figure text-secondary">
                   <FaDollarSign className="text-5xl"></FaDollarSign>
                </div>
                <div className="stat-title">Revenue</div>
                <div className="stat-value">{stats.revenue}</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                <FaUsers className="text-5xl"></FaUsers>
                </div>
                <div className="stat-title">Users</div>
                {/* <div className="stat-value">{stats.users}</div> */}
                <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                
                </div>
                <div className="stat-title">Menu items</div>
                <div className="stat-value"></div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            </div>
            
        </div>
    );
};

export default AdminHome;