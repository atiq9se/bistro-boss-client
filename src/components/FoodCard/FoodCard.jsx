import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {
    const {name, image, price, recipe} = item;
    const {user} = useAuth();
    const navigate = useNavigate();

    const handleAddCart= food=>{
        console.log(food)
        if(user && user.email){
            todo
        }else{
            Swal.fire({
                title: "Your are not Logged In?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login')
                }
              });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Food item" />
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleAddCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;