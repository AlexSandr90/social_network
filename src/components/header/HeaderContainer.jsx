import React, { Component } from "react";
import Header from "./Header";
import { connect } from 'react-redux';
import { getAuthUserData } from "../../redux";

class HeaderContainer extends Component{

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);