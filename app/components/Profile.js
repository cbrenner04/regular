import DocumentTitle from 'react-document-title';
import React from 'react';
import {UserProfileForm} from 'react-stormpath';
import UserProfileCheckIn from './profiles/UserProfileCheckIn.js';
import UserProfileRating from './profiles/UserProfileRating.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Profile = () =>
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
                  <Tabs
                    selectedIndex={0}>
                  <TabList>
                    <Tab>CheckIns</Tab>
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

export default Profile;
