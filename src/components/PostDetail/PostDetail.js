import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
console.log(post);
    return (
        <div>
            <h1> {post.title} </h1>
            <p> {post.body}  </p>
        </div>
    );
};

export default PostDetail;