import React, { useEffect, useState } from 'react';
import "./PostDetail.css"
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
        <div style={{color: 'white',margin:'0 auto',width:'600px',}}>
            <div className="post">
                <h3  style={{color:"#880e4f",textAlign:"center"}}> Post Id: {postId}</h3>
                <h3> Post Title: </h3>
                <h1> {post.title} </h1>
                <h3> Description: </h3>
                <p> {post.body}  </p>
            </div>
            <Comment postId={postId}/>
        </div>
    );
};

export default PostDetail;