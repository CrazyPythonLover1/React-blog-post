import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const PostDetail = () => {
    const {postId} = useParams();
    
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])
console.log(post);
    return (
        <div style={{color: 'white'}}>
            <h1> {post.title} </h1>
            <p> {post.body}  </p>

            <h1> Comments:</h1>

            {
                comment.map(comment => 
                    <div>
                        <Avatar alt="MIF" src="" />
                        {comment.body}
                    </div>
                )
            }
        </div>
    );
};

export default PostDetail;