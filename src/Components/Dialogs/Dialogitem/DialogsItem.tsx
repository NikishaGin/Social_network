import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsDialogs = {
    name: string
    id: string
}

export const DialogItem = (props: PropsDialogs) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialogs + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
