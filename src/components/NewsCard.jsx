import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view
    } = news;
    return (
            <div className="p-4 rounded-xl shadow-xl bg-white lg:px-10 border border-gray-300 mb-3">
                {/* Author and Date */}
                <div className="flex items-center justify-between space-x-4">
                    <div className='flex gap-3'>
                        <img
                            src={author.img}
                            alt={author.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm font-semibold">{author.name}</p>
                            <p className="text-xs text-gray-500">{author.published_date}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                    <button><img className='w-7' src="https://img.icons8.com/?size=100&id=iBJpnJfF62fn&format=png&color=000000" alt="" /></button>
                    <FaShareAlt className="ml-auto text-gray-500 cursor-pointer" />
                    </div>
                </div>

                {/* Title */}
                <h2 className="mt-3 text-lg font-bold">{title}</h2>

                {/* Thumbnail */}
                <img
                    src={thumbnail_url}
                    alt="thumbnail"
                    className="w-full h-[370px] sm:h-[450px] lg:h-[550px] rounded-2xl mt-3"
                />

                {/* Details */}
                <p className="mt-3 text-gray-600 text-sm">{details.slice(0, 150)}... <span className="text-blue-500 cursor-pointer">Read More</span></p>

                {/* Rating and Views */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < rating.number ? 'text-yellow-400' : 'text-gray-300'} />
                        ))}
                        <span className="ml-2 text-gray-600 text-sm">{rating.number}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                        <FaEye />
                        <span className="text-sm">{total_view}</span>
                    </div>
                </div>
            </div>
    );
};

export default NewsCard;