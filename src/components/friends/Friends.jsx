import React, { Component } from "react";
import * as axios from 'axios';
import stockPhoto from '../../assets/images/stockPhoto.jpg';

import friends from './friends.module.css';

// const Friends = props => {
//
//     const getFriends = () => {
//         if (props.friendsData.length === 0) {
//
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     props.setFriends(response.data.items);
//                 });
//         }
//     };
//
//     const {
//         info,
//         item,
//         avatarImg,
//         friendsGroup
//     } = friends;
//
//     return (
//         <div className={friendsGroup}>
//             <button onClick={getFriends}>Get Friends</button>
//             {
//                 props.friendsData.map(element => {
//
//                     const {
//                         id,
//                         avatar,
//                         status,
//                         followed,
//                         lastName,
//                         firstName,
//                         name
//                     } = element;
//
//                     // const {
//                     //     city,
//                     //     country
//                     // } = element.location;
//
//                     return (
//                         <div key={id} className={item}>
//                             {/*<img src={avatar} className={avatarImg} alt='Friends avatar'/>*/}
//                             <img src={element.photos.small != null ? element.photos.small : stockPhoto} className={avatarImg} alt='Friends avatar'/>
//                             <div>
//                                 {
//                                     followed
//                                         ? <button onClick={() => props.unfollowFriend(id) } >Unfollow</button>
//                                         : <button onClick={() => props.followFriend(id) } >Follow</button>
//                                 }
//                             </div>
//                             {/*<p className={info}> {firstName} {lastName} </p>*/}
//                             <p className={info}> {name} </p>
//                             <p className={info}> {status} </p>
//                             <p className={info}> {'{country}, {city}'} </p>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// };

class Friends extends Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setFriends(res.data.items);
            })
    }

    render() {

        const {
            info,
            item,
            avatarImg,
            friendsGroup
        } = friends;

        return (
            <div className={friendsGroup}>
                {/*<button onClick={this.getFriends}>Get Friends</button>*/}
                {
                    this.props.friendsData.map(element => {

                        const {
                            id,
                            avatar,
                            status,
                            followed,
                            lastName,
                            firstName,
                            name
                        } = element;

                        return (
                            <div key={id} className={item}>
                                <img src={element.photos.small != null ? element.photos.small : stockPhoto}
                                     className={avatarImg} alt='Friends avatar'/>
                                <div>
                                    {
                                        followed
                                            ? <button onClick={() => this.props.unfollowFriend(id)}>Unfollow</button>
                                            : <button onClick={() => this.props.followFriend(id)}>Follow</button>
                                    }
                                </div>
                                {/*<p className={info}> {firstName} {lastName} </p>*/}
                                <p className={info}> {name} </p>
                                <p className={info}> {status} </p>
                                <p className={info}> {'{country}, {city}'} </p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Friends;