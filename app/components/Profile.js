import React, {Component} from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import DocumentTitle from 'react-document-title';
import superagent from 'superagent';
import UserProfileCheckIn from './profiles/UserProfileCheckIn.js';
import {UserProfileForm} from 'react-stormpath';
import UserProfileRating from './profiles/UserProfileRating.js';

const TIMEOUT_LENGTH = 500;

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            estabs: []
        }
    }
    componentDidMount() {
        setTimeout(() => {
            const {userId} = this.props
            superagent.get(`/user_establishments/${userId}/user`).query(null).
                set('Accept', 'text/json').
                then((response) => {
                    const res = response.body;
                    console.log(res)
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
                            <UserProfileCheckIn establiments={this.state.estabs}/>
                          </TabPanel>
                          <TabPanel>
                            <UserProfileRating establiments={this.state.estabs}/>
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
