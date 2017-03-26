import Container from './Container';
import React from 'react';
import superagent from 'superagent';

const AuthLanding = () => {
    const setUser = () => {
        superagent.get('/email').query(null).
            set('Accept', 'text/json').then(() => {console.log('HEROKU')})
    };

    setUser();

    return (
        <div className="container">
            <Container />
        </div>
    );
};

export default AuthLanding;
