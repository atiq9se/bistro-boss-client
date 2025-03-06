import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
     const [menu] = useMenu();

    return(
        <div>
            <SectionTitle heading="Manage all items" subHeading="Hurry up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            menu.map((item, index)=>
                            <tr key={item._id}>
                            <td>{index+1}</td>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                        src={item.image}
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button className="btn btn-ghost btn-xs"><FaEdit className="text-red-600"></FaEdit></button>
                            </td>
                            <td>
                                <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-xs"><FaTrashAlt className="text-red-600"></FaTrashAlt></button>
                            </td>
                        </tr>
                            )
                        }
                        
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default ManageItems;