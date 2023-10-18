import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
   
    return (
        <div>
            <div className={s.item}>
             <img src="https://pushinka.top/uploads/posts/2023-04/thumbs/1680708667_pushinka-top-p-psikhologiya-avatarok-v-sotsialnikh-setyak-37.jpg"></img> 
            </div>
            {props.message}
            <p>likes count:{props.likeCount}</p>
        </div>
    );}
export default Post;