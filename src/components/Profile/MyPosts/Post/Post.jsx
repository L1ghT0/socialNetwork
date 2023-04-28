import React from 'react';
import P_classe from './Post.module.css'
import avatar from "../../../../assets/images/avatar.png";

const Post = (props) => {
    return (
        <div className={P_classe.post}>
            <img src={avatar} alt=""/>
            {props.postText}
            <div>
                <span>Likes: {props.likes}</span>
            </div>
        </div>
    );
}

export default Post;
