import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props)=>{
    let newPosts= props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>   
    );
  
    let newElement = React.createRef();
    let postAdd=()=>{
        debugger;
        props.addPosts();
    }
    let onChangePost=()=>{
        let text = newElement.current.value;
        props.updateNewPostText(text);
    }

        return (
        <div className={s.postsBlock}>
         <h3>My posts</h3>
            <div>
                <textarea onChange={onChangePost} ref={newElement} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={postAdd}>Add post</button>
            </div>
            <div className={s.posts}>
              {newPosts}
            </div>
        </div>
       );
    }


export default MyPosts;