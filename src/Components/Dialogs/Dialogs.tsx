import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {DialogItem} from "./Dialogitem/DialogsItem";
import {Message} from "./Message/Message";

type Props = {
    id: string,
    name: string,
    message: string,
}

type PropsDialogsType = {
    dialogs:Props[]
    message:Props[]
}

export const Dialogs = (props:PropsDialogsType) => {

    let dialogsElements = props.dialogs.map(di => <DialogItem name={di.name} id={di.id}/>)

    let messageElements = props.message.map(me => <Message message={me.message}/>)

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
