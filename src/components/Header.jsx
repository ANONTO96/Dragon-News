import moment from 'moment';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center my-4'>
            <img className='w-96' src={logo} alt="logo" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='text-gray-500'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;