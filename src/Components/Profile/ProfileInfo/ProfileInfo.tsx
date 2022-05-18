import React from "react";
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://avatars.mds.yandex.net/i?id=128b7276fc79fb4545cd700ba1a2de80-4560598-images-thumbs&n=13'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}