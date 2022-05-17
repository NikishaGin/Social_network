import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>

            <div>
                <img
                    src='https://avatars.mds.yandex.net/i?id=128b7276fc79fb4545cd700ba1a2de80-4560598-images-thumbs&n=13'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts />
        </div>

    )
}