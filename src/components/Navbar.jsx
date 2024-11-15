import { Link } from 'react-router-dom';
import logo from '../assets/nav-logo.png';
import userIcon from '../assets/user.png';
import { useContext } from 'react';
import { authContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(authContext)
    return (
        <div className="flex justify-between items-center my-4">
            <div className='w-10'>
                {
                    user? user.email:<img src={logo} alt="" />
                }
            </div>
            <div className='space-x-4 text-gray-500'>
                <Link to={'/'}>Home</Link>
                <Link to={'/carrier'}>Carrier</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className='flex gap-2 items-center'>
            <img className='w-9 h-9 rounded-full' src={userIcon} alt="icon" />
                {
                    user && user?.email ? (<button onClick={logOut} className='btn btn-neutral rounded-none'>Log Out</button>):(<Link to='/auth/login' className='btn btn-neutral rounded-none'>Log In</Link>)
                }
            </div>
        </div>
    );
};

export default Navbar;