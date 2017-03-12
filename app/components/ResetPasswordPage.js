import DocumentTitle from 'react-document-title';
import React from 'react';
import {ResetPasswordForm} from 'react-stormpath';

const ResetPasswordPage = () =>
    <DocumentTitle title={'ResetPassword'}>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h3>Reset Password</h3>
                    <hr />
                </div>
            </div>
            <ResetPasswordForm />
        </div>
    </DocumentTitle>

export default ResetPasswordPage;
