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
        <div>
           {
               post.map(post => <h1> { post.title} </h1>)
           }
        </div>
    );
};

export default Blog;