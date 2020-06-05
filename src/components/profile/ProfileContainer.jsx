import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getUserProfile } from "../../redux";
import {Redirect, withRouter} from "react-router-dom";

class ProfileAPIContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'} />
        }

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
});

const WithDataContainerComponent = withRouter(ProfileAPIContainer)

const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithDataContainerComponent);

export default ProfileContainer;