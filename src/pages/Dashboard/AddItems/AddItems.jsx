import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
    const {register, handleSubmit, reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async(data) => {
        console.log(data)
        // image upload to imgbb and then get an url
         const imageFile = { image: data.image[0] }
         const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
         })
         if(res.data.success){
            //now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url,

            }
            // 
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);

            if(menuRes.data.insertedId){
                //show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         };
    }

    return (
        <div>
           <SectionTitle heading='Add an item' subHeading="Whats's new?"></SectionTitle>
           <div className="p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input type="text" 
                        placeholder="Recipe Name" 
                        {...register("name", {required: true})}
                        className="input input-bordered w-full " />
                    </div>

                    <div className="flex gap-4">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className="select select-bordered w-full" defaultValue="default" {...register('category', {required: true})}>
                                <option disabled value="default">Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" 
                            placeholder="Price" 
                            {...register("price", {required:true})}
                            className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <div className="w-full mt-3">
                        <input type="file" {...register('image')} className="file-input w-full max-w-xs" />
                    </div>
              
                    <button className="btn mt-3">ADD ITMES <FaUtensils className="ml-4"></FaUtensils> </button>

                </form>
           </div>
        </div>
    );
};

export default AddItems;