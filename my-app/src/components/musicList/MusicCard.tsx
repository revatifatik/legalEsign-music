
import React from "react";
interface MusicCardProps {
    imgSrc: string,
    title: string,
    category: string
}

const MusicCard: React.FC<MusicCardProps> = ({ imgSrc, title, category }) => {
    return (
        <div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg w-full" src={imgSrc} alt="" />

                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                    <p>Category: {category}</p>
                </div>
            </div>

        </div>
    )
}

export default MusicCard