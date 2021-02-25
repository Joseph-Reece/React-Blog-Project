import React from 'react'
import PostMasonry from '../components/common/post-masonry'
import trending from '../assets/mocks/trending'


const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

const mergeStyles = function (posts, config) {
    posts.foreach ((post, index) => {
        post.style = config[index]
    })
}

mergeStyles(trending, trendingConfig)

const Home = () => {
    return (
        <section className="container Home">
           <div className="row">
               <h2>Trending Posts</h2>
               <PostMasonry posts={trending} columns={3} />  
           </div>
        </section>
    )
}

export default Home
