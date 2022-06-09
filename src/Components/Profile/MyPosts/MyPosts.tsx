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

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}