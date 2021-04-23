import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from 'react-router-dom';

import Home from './Home';
import Edit from './Edit';
import Add from './Add';

function Example() {
    return (
        
        <Router className = "App_container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/add">
                    <Add />
                </Route>
                <Route path="/edit/:id">
                    <Edit />
                </Route>
            </Switch>
        </Router>

    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
