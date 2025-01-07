import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from "react-router-dom";


const SignUp = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()
    const {createUser} = useContext(AuthContext)

    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true, minLength:4 })} name="name" placeholder="Name" className="input input-bordered" />
                            {errors.name?.type==="required" && <p className="text-red-500">Name is required</p>}
                            {errors.name?.type==="minLength" && <p className="text-red-500">Minlenth is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true})} placeholder="email" className="input input-bordered" />
                            {errors.email?.type==="required" && <p className="text-red-500">Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { 
                                required: true, 
                                minLength:6, 
                                pattern:/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/ 
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type==="required" && <p className="text-red-500">Name is required</p>}
                            {errors.password?.type==="minLength" && <p className="text-red-500">Minlenth is required</p>}
                            {errors.password?.type==="pattern" && <p className="text-red-500">One uppercase one lowercase one spacial character</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign Up"/>
                        </div>
                    </form>
                    <p>already register? <Link to='/login'>Sign In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;