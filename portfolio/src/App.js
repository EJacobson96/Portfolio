import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Work from './components/Work';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <NavBar />
                <Switch>
                    <Route exact path='/'>
                        <Work />
                    </Route>
                    <Route path='/about'>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default App;
