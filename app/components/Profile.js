import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import DocumentTitle from 'react-document-title';
import superagent from 'superagent';
import UserProfileCheckIn from './profiles/UserProfileCheckIn.js';
import {UserProfileForm} from 'react-stormpath';
import UserProfileRating from './profiles/UserProfileRating.js';

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            estabs: []
        }
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
                            <UserProfileCheckIn />
                          </TabPanel>
                          <TabPanel>
                            <UserProfileRating />
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
