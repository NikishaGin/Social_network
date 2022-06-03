import React from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    let posts = [
        {id: 1, message: '"Hi, how are you?"', likesCount: '12' },
        {id: 2, message: 'It\'s my first post', likesCount: '11' },
    ]

    let postsElements = posts.map
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