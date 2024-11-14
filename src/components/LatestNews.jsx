import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div>
            <div className="flex gap-2 items-center bg-gray-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">latest</p>
            <Marquee pauseOnHover={true} speed={80} className="space-x-5">
                <Link to={'/news'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus vel est inventore quaerat beatae repudiandae hic reiciendis! Ut praesentium ullam!</Link>
                <Link to={'/news'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus vel est inventore quaerat beatae repudiandae hic reiciendis! Ut praesentium ullam!</Link>
            </Marquee>
        </div>
        </div>
    );
};

export default LatestNews;