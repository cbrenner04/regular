import DocumentTitle from 'react-document-title';
import React from 'react';
import {RegistrationForm} from 'react-stormpath';

const RegistrationPage = () =>
    <DocumentTitle title={'Registration'}>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h3>Registration</h3>
                    <hr />
                </div>
            </div>
            <RegistrationForm />
        </div>
    </DocumentTitle>

export default RegistrationPage;
