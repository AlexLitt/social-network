import React from  'react';
import './Post.module.css'; 

let style = {
    'post' : 'Post_post__3iLUm',
    'like' : 'Post_like__1lJMW'
}


const Post = (props) => {
    return(
    <div className={style.post}>
      <div className="">
         <span>{props.message}</span>
         <br/>
         <span className={style.like}>{props.like}</span> 
      </div>  
    </div>   
    )
}

export default Post;
