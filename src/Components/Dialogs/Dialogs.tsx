import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsDialogs = {
    name: string
    id: string
}

type PropsMessage = {
    message: string
}

const DialogItem = (props: PropsDialogs) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={s.dialogs + '' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message =(props: PropsMessage)=> {
    return (
        <div className={s.dialogs}>
            {props.message}
        </div>

    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Viktor' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='Bye'/>
                <Message message='it'/>

            </div>
        </div>
    )
}
