import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Login = () => {
    const {userLogin, setUser}=useContext(authContext)
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email,password)
        .then(res => {
            const user = res.user;
            setUser(user);
        })
        .catch(error =>{
         const errorCode = error.code;
         const errorMessage = error.message;
        })
    }
    return (
        <div className="hero min-h-[870px]">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 md:w-[550px] shrink-0 shadow-2xl p-8 rounded-none">
                <h1 className="text-2xl text-center mt-5">Login your account</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Email</span>
                            </label>
                            <input type="email"
                            name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base">Password</span>
                            </label>
                            <input type="password"
                            name="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-sm text-gray-500">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white">Login</button>
                        </div>
                        <p className="text-center">Don’t Have An Account ? <Link to='/auth/register' className="text-red-600">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;