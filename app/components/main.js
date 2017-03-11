import React, {Component} from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';

export default class Main extends Component {
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

Main.propTypes = {children: React.PropTypes.node};
