import React from "react";

import navbar from './navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const {
        nav,
        items,
        item,
        link,
        active,
    } = navbar;

    return (
        <nav className={nav}>
            <ul className={items}>
                <li className={item}>
                    <NavLink
                        className={ link }
                        activeClassName={active}
                        to="/profile"
                        exact
                    >
                        Профиль
                    </NavLink>
                </li>
                <li className={item}>
                    <NavLink
                        className={link}
                        activeClassName={active}
                        to="/dialogs"
                        exact
                    >
                        Сообщения
                    </NavLink>
                </li>
                <li className={item}>
                    <NavLink
                        className={link}
                        activeClassName={active}
                        to="/news"
                        exact
                    >
                        Новости
                    </NavLink>
                </li>
                <li className={item}>
                    <NavLink
                        className={link}
                        activeClassName={active}
                        to="/music"
                        exact
                    >
                        Музыка
                    </NavLink>
                </li>
                <li className={item}>
                    <NavLink
                        className={link}
                        activeClassName={active}
                        to="/settings"
                        exact
                    >
                        Настройки
                    </NavLink>
                </li>
                <li className={item}>
                    <NavLink
                        className={ link }
                        activeClassName={active}
                        to="/friends"
                        exact
                    >
                        Друзья
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;