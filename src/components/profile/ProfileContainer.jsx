import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { getUserProfile } from "../../redux";
import {
    Redirect,
    withRouter
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc";
import {compose} from "redux";

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
    profile: state.profilePage.profile,
});

const ProfileContainer = compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect,
)(ProfileAPIContainer);

// const AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer);
// const WithDataContainerComponent = withRouter(AuthRedirectComponent);
// const ProfileContainer = connect(mapStateToProps, {getUserProfile})(AuthRedirectComponent);

export default ProfileContainer;