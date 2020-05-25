import React, { Component } from "react";
import Profile from "./Profile";
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux";

class ProfileAPIContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile
});

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileAPIContainer);

export default ProfileContainer;