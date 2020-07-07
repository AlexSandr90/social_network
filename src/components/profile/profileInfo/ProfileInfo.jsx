import React, {Fragment} from "react";
import pInfo from './profileInfo.module.scss';
import Preloader from "../../common/Preloader/Preloader";
import stockPhoto from '../../../assets/images/stockPhoto.jpg'
import ProfileStatus from "../profileStatus";

const ProfileInfo = props => {
    if(!props.profile) {
        return <Preloader/>
    }

    const { imgBlock, img, descriptionBlock, profilePhoto } = pInfo;

    return (
        <Fragment>
            {/*<div className={imgBlock}>*/}
            {/*    <img*/}
            {/*        src='https://www.pega.com/sites/default/files/styles/640/public/media/images/2019-08/blog800x4007reasonstoembracelow-codedevelopment.jpg?itok=IL1UG4et'*/}
            {/*        alt="img"*/}
            {/*        className={img}*/}
            {/*    />*/}
            {/*</div>*/}
            <div>

            </div>
            <div className={descriptionBlock}>
                <img
                    src={ props.profile.photos.large != null ?
                        props.profile.photos.large :
                        stockPhoto}
                    className={profilePhoto} />
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
                <div>
                    {props.profile.fullName && <p>Name: {props.profile.fullName}</p>}
                    {props.profile.aboutMe && <p>About me: {props.profile.aboutMe}</p>}

                    <ul>MyContacts:
                        {
                            props.profile.contacts.facebook && <li>FB: {props.profile.contacts.facebook}</li>
                        }
                        {
                            props.profile.contacts.github && <li>Github: {props.profile.contacts.github}</li>
                        }
                        {
                            props.profile.contacts.instagram && <li>Insta: {props.profile.contacts.instagram}</li>
                        }
                        {
                            props.profile.contacts.mainLink && <li>Link: {props.profile.contacts.mainLink}</li>
                        }
                        {
                            props.profile.contacts.twitter && <li>Twitter: {props.profile.contacts.twitter}</li>
                        }
                        {
                            props.profile.contacts.vk && <li>VK: {props.profile.contacts.vk}</li>
                        }
                        {
                            props.profile.contacts.website && <li>Site: {props.profile.contacts.website}</li>
                        }
                        {
                            props.profile.contacts.youtube && <li>Youtube: {props.profile.contacts.youtube}</li>
                        }
                        {}
                    </ul>
                    <p>ID: {props.profile.userId}</p>
                    {props.profile.lookingForAJob ? <p>lookingForAJob: Yes</p>: <p>lookingForAJob: No</p>}
                    {props.profile.lookingForAJob && props.profile.lookingForAJobDescription && <p>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</p>}
                </div>
                description
            </div>
        </Fragment>
    )
};

export default ProfileInfo
