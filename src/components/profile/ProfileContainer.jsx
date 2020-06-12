import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import {
    Redirect,
    withRouter
} from "react-router-dom";

import {
    getStatus,
    updateStatus,
    getUserProfile
} from "../../redux";

import {compose} from "redux";

class ProfileAPIContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 8151;
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
            <Profile
                {...this.props}
                status={this.props.status}
                profile={this.props.profile}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = state => ({
    status: state.profilePage.status,
    profile: state.profilePage.profile
});

const ProfileContainer = compose(
    connect(
        mapStateToProps,
        {
            getStatus,
            updateStatus,
            getUserProfile
        }),
    withRouter,
)(ProfileAPIContainer);

// const AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer);
// const WithDataContainerComponent = withRouter(AuthRedirectComponent);
// const ProfileContainer = connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent);

export default ProfileContainer;