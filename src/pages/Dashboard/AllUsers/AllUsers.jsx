import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    const handleDeleteUser=user=>{
        
    }
    return (
        <div>
            <div className="flex justify-evenly">
                <h2>all users</h2>
                <h2>Total users{users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user=>
                            <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td><button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600"></FaTrashAlt></button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;