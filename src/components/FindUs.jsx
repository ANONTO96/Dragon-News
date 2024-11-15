import fbIcon from '../assets/fb.png'
import instaIcon from '../assets/instagram.png'
import twitterIcon from '../assets/twitter.png'

const FindUs = () => {
    return (
        <div>
            <h2 className="mb-3 font-semibold">Find Us On :</h2>
            <div className="join join-vertical flex bg-base-200">
                <button className="btn justify-start join-item border border-gray-300"><img src={fbIcon} alt="" />Facebook</button>
                <button className="btn justify-start join-item border border-gray-300"><img src={instaIcon} alt="" />Instagram</button>
                <button className="btn justify-start join-item border border-gray-300"><img src={twitterIcon} alt="" />Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;