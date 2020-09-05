import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  

const Post = ({post}) => {
    const {title, body, id}= post;
    const classes = useStyles();

    let history = useHistory();
    const handleClick = (postId) =>{
        history.push(`/post/${postId}`)
    };

   
    return (
        <div style={{marginTop:"40px",display: "flex",justifyContent: "center"}} >
        
            <Card className={classes.root}>
                <CardActionArea>
                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" color="secondary">
                    Share
                    </Button>
                     <Link to={`/post/${id}`} style={{textDecoration:"none"}}>
                        <Button size="small" color="secondary">
                        See More...
                        </Button>
                    </Link> 
                    {/* <Button onclick={()=>handleClick(id)} size="small" color="secondary">
                        See More
                    </Button> */}
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;