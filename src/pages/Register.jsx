import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Register = () => {
    const {createNewUser,setUser} = useContext(authContext)
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        createNewUser(email,password)
        .then(res => {
            const user = res.user;
            setUser(user)
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });

    }
    return (
        <div className="hero min-h-[870px]">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 md:w-[550px] shrink-0 shadow-2xl p-8 rounded-none">
                <h1 className="text-2xl text-center mt-5">Register your account</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Your Name</span>
                            </label>
                            <input type="text" name="name" 
                            placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Password</span>
                            </label>
                            <input type="password" 
                            name="password" placeholder="Enter your password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white">Register</button>
                        </div>
                        <p className="text-center">Already Registered An Account ? <Link to='/auth/login' className="text-red-600">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;