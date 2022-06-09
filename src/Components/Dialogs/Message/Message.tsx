import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsMessage = {
    message: string
}

export const Message = (props: PropsMessage) => {
    return (
        <div className={s.dialogs}>
            {props.message}
        </div>
    )
}


