import DocumentTitle from 'react-document-title';
import {LoginForm} from 'react-stormpath';
import React from 'react';

const LoginPage = () =>
    <DocumentTitle title={'Login'}>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h3>Login</h3>
                    <hr />
                </div>
            </div>
            <LoginForm />
        </div>
    </DocumentTitle>

export default LoginPage;
