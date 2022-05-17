import React from "react";
import s from './MyPosts.module.css';
import {Posts} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Posts message={"Hi"}/>
                <Posts message={"Bye"}/>
            </div>
        </div>
    )
}