import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    return (
        <div className="mb-5">
            <h2 className="font-semibold mb-3">Dragon News Home</h2>
            <p className="text-gray-500 text-sm">{news.length} News Found In This Category</p>
            <div>
            {
                news.map((singleNews) => (<NewsCard key={singleNews._id} news={singleNews}></NewsCard>))
            }
            </div>
        </div>
    );
};

export default CategoryNews;