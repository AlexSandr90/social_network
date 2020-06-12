import React, {Component, Fragment} from "react";
import pStatus from './profileStatus.module.scss';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = e => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    render() {
        return (
            <Fragment>
                {
                    !this.state.editMode &&
                        <div>
                            <span onDoubleClick={ this.activateEditMode } >
                                {this.props.status || '-------'}
                            </span>
                        </div>
                }
                {
                    this.state.editMode &&
                        <div>
                            <input
                                autoFocus
                                onBlur={ this.deactivateEditMode }
                                value={ this.state.status }
                                onChange={ this.onStatusChange }
                            />
                        </div>
                }
            </Fragment>
        )
    }
}

export default ProfileStatus;