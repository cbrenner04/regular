import DocumentTitle from 'react-document-title';
import {Header} from './Header';
import React from 'react';

export default class is extends React.Component {
    render() {
        return (
            <DocumentTitle title="My React App">
                <div className="Main">
                    <Header />
                    {this.props.children}
                </div>
            </DocumentTitle>
        );
    }
}

is.propTypes = {children: React.PropTypes.node};
