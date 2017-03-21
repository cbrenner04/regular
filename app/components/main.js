import DocumentTitle from 'react-document-title';
import Navigation from './Navigation';
import React from 'react';

const Main = ({children}) =>
    <DocumentTitle title="RegularApp">
        <div className="Main">
            <Navigation />
            {children}
        </div>
    </DocumentTitle>

Main.propTypes = {children: React.PropTypes.node};

export default Main;
