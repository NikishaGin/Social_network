import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type PropsDialogs = {
    name: string
    id: number
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

const Message = (props: PropsMessage) => {
    return (
        <div className={s.dialogs}>
            {props.message}
        </div>
    )
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

    let dialogsElements = dialogs.map(di => <DialogItem name={di.name} id={di.id}/>)

    let messageElements = messages.map(me => <Message message={me.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
