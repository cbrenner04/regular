import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import DocumentTitle from 'react-document-title';
import UserProfileCheckIn from './profiles/UserProfileCheckIn.js';
import {UserProfileForm} from 'react-stormpath';
import UserProfileRating from './profiles/UserProfileRating.js';
import superagent from 'superagent';

const TIMEOUT_LENGTH = 500;

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {estabs: []}
    }
    componentDidMount() {
        setTimeout(() => {
            const {userId} = this.props
            superagent.get(`/user_establishments/${userId}/user`).query(null).
                set('Accept', 'text/json').
                then((response) => {
                    const res = response.body;
                    this.setState({estabs: res})
                });
        }, TIMEOUT_LENGTH);
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
                            <Tab>Check-ins</Tab>
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
