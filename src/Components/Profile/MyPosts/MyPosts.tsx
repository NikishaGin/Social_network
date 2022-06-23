import React from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

type Props = {
    id: string,
    message: string,
    likesCount: string
}

type PropsMyPostsType = {
    posts:Props[]
}

export const MyPosts = (props:PropsMyPostsType) => {

    let postsElements = props.posts.map
    (po => <Posts message={po.message} likesCount={po.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            alert(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>ref={newPostElement}</textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}