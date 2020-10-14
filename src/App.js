import React from 'react';
import { Navbar } from './components';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route exact path="/" />
            </Switch>
        </Router>
    )
}

export default App
