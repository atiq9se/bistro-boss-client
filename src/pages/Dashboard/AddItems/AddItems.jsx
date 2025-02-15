import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";



const AddItems = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
           <SectionTitle heading='Add an item' subHeading="Whats's new?"></SectionTitle>
           <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input type="text" 
                        placeholder="Recipe Name" 
                        {...register("name")}
                        className="input input-bordered w-full " />
                    </div>

                    <div className="flex gap-4">
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className="select select-bordered w-full ">
                                <option disabled selected>Who shot first?</option>
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
                            placeholder="Recipe Name" 
                            {...register("name")}
                            className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    
                    <input type="submit" />

                </form>
           </div>
        </div>
    );
};

export default AddItems;