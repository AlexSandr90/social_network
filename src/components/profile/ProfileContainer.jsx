import React, { Component } from "react";
import Profile from "./Profile";
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux";
import {withRouter} from "react-router-dom";

class ProfileAPIContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

const WithDataContainerComponent = withRouter(ProfileAPIContainer)

const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithDataContainerComponent);

export default ProfileContainer;