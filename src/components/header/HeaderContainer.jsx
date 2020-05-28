import React, { Component } from "react";
import Header from "./Header";
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from "../../redux";

class HeaderContainer extends Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                // debugger
                if (res.data.resultCode === 0) {
                    const {
                        id,
                        email,
                        login
                    } = res.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);