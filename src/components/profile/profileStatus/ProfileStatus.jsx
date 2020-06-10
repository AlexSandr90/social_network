import React, {Component, Fragment} from "react";
import pStatus from './profileStatus.module.scss';

class ProfileStatus extends Component {
    state = {
        editMode: false,
    };

    activateEditMode() {
        this.setState({
            editMode: true,
        });
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <Fragment>
                {
                    !this.state.editMode &&
                        <div>
                            <span onDoubleClick={ this.activateEditMode.bind(this) } >
                                {this.props.status}
                            </span>
                        </div>
                }
                {
                    this.state.editMode &&
                        <div>
                            <input
                                autoFocus
                                onBlur={ this.deactivateEditMode.bind(this) }
                                value={ this.props.status }
                            />
                        </div>
                }
            </Fragment>
        )
    }
}

export default ProfileStatus;