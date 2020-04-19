import React from "react";

import { NavLink } from "react-router-dom";

import dialogItem from './dialogItem.module.css';

const DialogItem = props => {

    const { item, active, dialog, imgAvatar } = dialogItem;
    const { id, name, itemImg } = props;
    let path = `/dialogs/${id}`;

    return (
        <div className={ dialog }>
            <img className={ imgAvatar } src={ itemImg } alt="avatarka"/>
            <NavLink
                className={ item }
                activeClassName={ active }
                to={ path }
            >
                { name }
            </NavLink>
        </div>

    )
};

export default DialogItem;