import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
    render() {
        let footer = <Footer 
                        socials = { [
                            {
                                Icon: 'icon-envelope',
                                Link: 'mailto:eric.jj96@gmail.com'
                            },
                            {
                                Icon: 'icon-social-linkedin',
                                Link: 'https://www.linkedin.com/in/eric-j-jacobson/'
                            },
                            {
                                Icon: 'icon-social-github',
                                Link: 'https://github.com/EJacobson96'
                            },
                            {
                                Icon: 'icon-social-facebook',
                                Link: 'https://www.facebook.com/eric.jacobson.102'
                            }
                        ] }
                    />
        return (
            <div className="contentContainer">
                <NavBar />
                <Switch>
                    <Route exact path='/'>
                        <div>
                            <Work />
                            { footer }
                        </div>
                    </Route>
                    <Route path='/about'>
                        <div>
                            <About />
                            { footer }
                        </div>
                    </Route>
                </Switch>

            </div>
        );
    }
}

export default App;
