import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Blog = () => {
    const [post,setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data=> setPost(data))
    },[])
    
    return (
        <div >
           {
               post.map(post => <Post post={post}></Post>)
           }
        </div>
    );
};

export default Blog;