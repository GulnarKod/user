import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Messages/Message';

const Dialogs=(props)=>{
    let dialogsElement= props.state.dialogsData.map(d => <DialogsItem name ={d.name} id={d.id}/>);
    let messagesElement =props.state.dialogsMessages.map(m => <Message message={m.message}/>)
    let newAddMessage = React.createRef();
    let addMessage= ()=>{
        let newMessage=newAddMessage.current.value;
        alert(newMessage);

    }
    return(
        <div  className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.message}>
                <textarea ref={newAddMessage}>Message</textarea>
                <button onClick={addMessage}>Add message</button>
              {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs