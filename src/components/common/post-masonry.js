import React from 'react'
import {MasonryPost}  from './'

const PostMasonry = ({ posts, columns, tagsOnTop }) => {
    return (
        <section className="masonry" style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))` }}>
            { posts.map((post, index) =>
                <MasonryPost {...{ post, index, tagsOnTop, key: index }} />// Shorthand for passing props to components if the variable name is the name of the prop
            )}
        </section>
    )
}

export default PostMasonry
