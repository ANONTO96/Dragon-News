
import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";
import swimming from '../assets/swimming.png';
import classroom from '../assets/class.png'; 
import playground from '../assets/playground.png';
import bg from '../assets/bg.png'; 

const RightNavbar = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <div>
                <h2>Q-Zone</h2>
                <img src={swimming} alt="" />
                <img src={classroom} alt="" />
                <img src={playground} alt="" />
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNavbar;