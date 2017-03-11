// Include the Main React Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import ReactStormpath from 'react-stormpath';
// Grabs the Routes
import Routes from './config/routes'

ReactStormpath.init();

ReactDOM.render(<Routes />, document.getElementById('app'));
