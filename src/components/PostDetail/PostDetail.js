import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {postId} = useParams();
    
    const [post, setPost] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))

    },[])
    return (
        <div style={{color: 'white'}}>
            <h3> Post Id: {postId}</h3>
            <h1> {post.title} </h1>
            <p> {post.body}  </p>
            <Comment postId={postId}/>
        </div>
    );
};

export default PostDetail;