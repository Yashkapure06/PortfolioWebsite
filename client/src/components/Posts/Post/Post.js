import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import "../../Blog/styles.css";
import { Button } from '@chakra-ui/react';
import { BsHeartFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
  
    
    <div className="card-container">
        
    <><div className="card-image">
       <img
         src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title}  />
     </div>
     
     <div className="card-body">
     
       <div>
               
             <span className="card-badge card-badge-blue" >{post.tags.map((tag) => `#${tag} `)}</span>
           
       </div>
         <h1>{post.title}</h1>
         <p className="card-subtitle">
         {post.message}
         </p>
         <div className="card-author">
           <img src= {post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
             alt={post.creator} />
           <div className="author-info">
             <p className="author-name">{post.creator}</p>
             <p className="post-timestamp">{moment(post.createdAt).fromNow()}</p>
           </div>
           <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><BsHeartFill fontSize="small" /> Like {post.likeCount} </Button>
           <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><MdDelete fontSize="small" /> Delete</Button>
         </div>
       </div>
       </>
 
 </div>

  );
};

export default Post;
