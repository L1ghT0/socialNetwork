import React from 'react';
import MP_classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {
    let PostsElemets = props.postsData
        .map(post => <Post postText={post.postText} likes={post.Likes}/>)

    let addPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={MP_classes.postsBlock}>
            My posts
            <AddPostRedux onSubmit={addPost}/>
            <div className={MP_classes.posts}>
                {PostsElemets}
            </div>
        </div>
    );
}

let maxLength = maxLengthCreator(10);
const AddPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newPostText'
                       placeholder='write a new post'
                       validate={[required ,maxLength]}/>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

let AddPostRedux = reduxForm({form: 'post'})(AddPost)


export default MyPosts;
