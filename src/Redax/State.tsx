import {v1} from "uuid";


export let State = {
    posts:[
        {id: v1(), message: '"Hi, how are you?"', likesCount: '12' },
        {id: v1(), message: 'It\'s my first post', likesCount: '11' },
    ],
    dialogs:[
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Viktor'},
        {id: v1(), name: 'Valera'},
    ],
    message:[
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your IT'},
    ],
}





