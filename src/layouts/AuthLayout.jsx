import { Link, Outlet } from "react-router-dom";
import userIcon from '../assets/user.png';
import { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';

const AuthLayout = () => {
    const {user} = useContext(authContext)
    return (
        <div className="font-Poppins bg-gray-200">
           <header className="mx-auto">
           <div className="flex justify-between items-center">
            <div className="ml-28">
                {
                    user && user.email
                }
            </div>
            <div className='space-x-9 text-gray-500'>
                <Link to={'/'}>Home</Link>
                <Link to={'/carrier'}>Carrier</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <img className='w-9 h-9 rounded-full' src={userIcon} alt="icon" />
                <Link to='/auth/login' className='btn btn-neutral rounded-none'>Log In</Link>
            </div>
        </div>
           </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;