import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

const PostCard = ({ data }) => {
    console.log(data)
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full">
            <GatsbyImage image={data.coverImage.asset.gatsbyImageData} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">
                    {data.summary}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {Object.keys(data.category).map((category, key) => {
                    return <span key={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
                })}
            </div>
        </div>
    )
}

export default PostCard