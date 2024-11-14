import { Link } from 'react-router-dom';
import logo from '../assets/nav-logo.png';
import userIcon from '../assets/user.png';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-4">
            <div className='w-10'>
                <img src={logo} alt="" />
            </div>
            <div className='space-x-4 text-gray-500'>
                <Link to={'/'}>Home</Link>
                <Link to={'/carrier'}>Carrier</Link>
                <Link to={'/about'}>About</Link>
            </div>
            <div className='flex gap-2 items-center'>
                <img className='w-10 h-10' src={userIcon} alt="icon" />
                <button className='btn btn-neutral rounded-none'>Log In</button>
            </div>
        </div>
    );
};

export default Navbar;