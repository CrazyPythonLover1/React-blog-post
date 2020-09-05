import React, { useState, useEffect } from 'react';
import "./Comment.css"
import Avatar from '@material-ui/core/Avatar';


const Comment = ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    return (
        <div>
            <h1> Comments:</h1>

            {
                comments.map(comment => 
                    <div>
                        <div className="comment__top">
                            <Avatar alt="MIF" src="" />
                            <h3> {comment.name} </h3>
                        </div>
                        <p> Post Id: {comment.postId} </p>
                        <p>{comment.body}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Comment;