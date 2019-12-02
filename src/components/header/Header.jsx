import React, {Component} from 'react';

import {
    Img,
    HeaderMain
} from "./styledComponent";

export default class Header extends Component {
    render() {
        return (
            <HeaderMain>
                <Img
                    src='https://www.logogenie.net/download/preview/medium/3589659'
                    alt='logo'
                />
            </HeaderMain>
        );
    }
}

// export default class Header extends Component {
//     render() {
//         return (
//             <header className='header'>
//                 <img src="https://www.logogenie.net/download/preview/medium/3589659" alt='logo'/>
//             </header>
//         )
//     }
// };
