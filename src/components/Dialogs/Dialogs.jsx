import s from './Dialogs.module.css'
import DialogItem from './Dialogitem/Dialogsitem';
import Message from './Message/Message';
import { NavLink } from "react-router-dom";
import React from 'react';
import { updateNewMessageText } from '../../redux/state';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

    let textMessage = React.createRef();

    let addMessage = () => {
        let contentMessage = textMessage.current.value;
        
    }

    let onMessageChange = () => {
        let text = textMessage.current.value;
        props.updateNewMessageText(text)
        
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>

            <div>
                <textarea onChange={onMessageChange} ref={textMessage} value={props.state.newMessageText} ></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Send Message</button>
            </div>
        </div>
    )
}

export default Dialogs;