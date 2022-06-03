import React from "react";
import s from './Posts.module.css';

type PostsPropsType ={
    message:string
    likesCount:string
}


export const Posts = (props:PostsPropsType) => {
    return (
        <div className={s.item}>
            <img src='https://avatars.mds.yandex.net/i?id=7fc26146ed09f8aa62fb41a69bd5b4d3-4981909-images-thumbs&n=13'/>
            {props.message}
            <div>
                <span>Like {props.likesCount}</span>
            </div>

        </div>
    )
}