import React from 'react';
import P_classe from './Post.module.css'

const Post = (props) => {
    return (
        <div className={P_classe.post}>
            <img src="https://media4.s-nbcnews.com/i/MSNBC/Components/Photo/_new/g-tch-091221-avatar-333p.jpg" alt=""/>
            {props.postText}
            <div>
                <span>Likes: {props.likes}</span>
            </div>
        </div>
    );
}

export default Post;
