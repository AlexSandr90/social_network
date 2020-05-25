import React, {Fragment} from "react";
import pInfo from './profileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = props => {
    if(!props.profile) {
        return <Preloader/>
    }

    const { imgBlock, img, descriptionBlock } = pInfo;

    return (
        <Fragment>
            <div className={imgBlock}>
                <img
                    src='https://www.pega.com/sites/default/files/styles/640/public/media/images/2019-08/blog800x4007reasonstoembracelow-codedevelopment.jpg?itok=IL1UG4et'
                    alt="img"
                    className={img}
                />
            </div>
            <div className={descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </Fragment>
    )
};

export default ProfileInfo