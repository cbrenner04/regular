import DocumentTitle from 'react-document-title';
import React from 'react';
import {UserProfileForm} from 'react-stormpath';

const Profile = () =>
    <DocumentTitle title={'My Profile'}>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h3>My Profile</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <UserProfileForm />
                </div>
            </div>
        </div>
    </DocumentTitle>

export default Profile;
