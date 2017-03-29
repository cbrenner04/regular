import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import DocumentTitle from 'react-document-title';
import UserProfileCheckIn from './profiles/UserProfileCheckIn.js';
import {UserProfileForm} from 'react-stormpath';
import UserProfileRating from './profiles/UserProfileRating.js';
import superagent from 'superagent';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {estabs: []}
    }

    componentDidMount() {
        superagent.get('/email').query(null).
            set('Accept', 'text/json').
            then((response) => {
                const user = response.body._id;

                superagent.get(`/user_establishments/${user}/user`).query(null).
                    set('Accept', 'text/json').
                    then((result) => {
                        const res = result.body;

                        this.setState({estabs: res})
                    });
            })
    }
    render () {
        return (
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
                            <Tabs selectedIndex={0}>
                                <TabList>
                                    <Tab>Favorites</Tab>
                                    <Tab>Ratings</Tab>
                                    <Tab>Settings</Tab>
                                </TabList>
                                <TabPanel>
                                    <UserProfileCheckIn
                                        establishments={this.state.estabs}/>
                                </TabPanel>
                                <TabPanel>
                                    <UserProfileRating
                                        establishments={this.state.estabs}/>
                                </TabPanel>
                                <TabPanel>
                                    <UserProfileForm />
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        )
    }
}
