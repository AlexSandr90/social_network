import React from "react";

import m from './message.module.css';

const Message = props => {

    const { messageText } = props;
    const { message } = m;



    return (
        <div className={message}>
            { messageText }
        </div>
    )
};

export default Message;