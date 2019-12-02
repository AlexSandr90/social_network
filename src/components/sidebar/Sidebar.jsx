import React, { Component } from 'react';

import {
    SidebarMain,
    SidebarMainNav,
    SidebarMainLink,
    SidebarMainList,
    SidebarMainNavItems,
    SidebarMainListLastChild
} from "./styledComponent";

export default class Sidebar extends Component {
    render() {
        return (
            <SidebarMain>
                <SidebarMainNav>
                    <SidebarMainNavItems>
                        <SidebarMainList>
                            <SidebarMainLink href={'#'}>Profile</SidebarMainLink>
                        </SidebarMainList>
                        <SidebarMainList>
                            <SidebarMainLink href={'#'}>Messages</SidebarMainLink>
                        </SidebarMainList>
                        <SidebarMainList>
                            <SidebarMainLink href={'#'}>News</SidebarMainLink>
                        </SidebarMainList>
                        <SidebarMainList>
                            <SidebarMainLink href={'#'}>Music</SidebarMainLink>
                        </SidebarMainList>
                        <SidebarMainListLastChild>
                            <SidebarMainLink href={'#'}>Settings</SidebarMainLink>
                        </SidebarMainListLastChild>
                    </SidebarMainNavItems>
                </SidebarMainNav>
            </SidebarMain>
        )
    }
}

// export default class Sidebar extends Component {
//     render() {
//         return (
//             <main className='sidebar'>
//                 <nav className='sidebar__nav'>
//                     <ul className='sidebar__nav-items items'>
//                         <li className='items_item'><a href="#">Profile</a></li>
//                         <li className='items_item'><a href="#">Messages</a></li>
//                         <li className='items_item'><a href="#">News</a></li>
//                         <li className='items_item'><a href="#">Music</a></li>
//                         <li className='items_item'><a href="#">Settings</a></li>
//                     </ul>
//                 </nav>
//             </main>
//         )
//     }
// };
