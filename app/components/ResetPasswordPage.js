import DocumentTitle from 'react-document-title';
import {ResetPasswordForm} from 'react-stormpath';
import React from 'react';

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
