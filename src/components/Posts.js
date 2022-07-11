import React from 'react'
import { Link } from 'gatsby'
import PostCard from './PostCard'

const Posts = ({ data }) => {
    return (
        <div className='grid grid-cols-3 grid-flow-row gap-4 place-content-center'>
            {data.map((post, key) => {
                console.log(post.slug.current)

                return (
                    <Link key={key} to={post.slug.current}>
                        <PostCard data={post} />
                    </Link>
                )
            })}
        </div>
    )
}

export default Posts