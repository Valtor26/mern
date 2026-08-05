
import { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: 1,
            image: "https://images.unsplash.com/photo-1785675247621-07b03d894331?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            caption: "A beautiful sunset over the mountains."
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/feed')
            .then((res) => {
                setPosts(res.data.posts);
            }) 
            .catch((err) => {
                console.error("Error fetching posts:", err);
            });
    }, [])

  return (
    <section className='feed-section'>
        {posts.length > 0 ? (
            posts.map(post => (
                <div key={post._id} className='post-card'>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))
        ) : (
            <p>No posts available.</p>
        )}
    </section>
  )
}

export default Feed