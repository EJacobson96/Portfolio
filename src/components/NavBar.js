import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import resume from '../documents/resume.pdf';
import '../css/NavBar.css';

class NavBar extends Component {

    componentDidMount() {
        let navElements = document.getElementsByClassName('navElement');
        if (this.props.location.pathname === '/about') {
            navElements[2].classList.add('active')
            navElements[0].classList.remove('active')
        } else { 
            navElements[2].classList.remove('active');
            navElements[0].classList.add('active')
        }
    }

    componentWillReceiveProps(nextProps) {
        let navElements = document.getElementsByClassName('navElement');
        if (nextProps.location.pathname !== this.props.location.pathname) {
            if (nextProps.location.pathname === '/about') {
                navElements[2].classList.add('active')
                navElements[0].classList.remove('active')
            } else { 
                navElements[2].classList.remove('active');
                navElements[0].classList.add('active')
            }
        }
    }

    render() {
        return (
            <div className='nav'> 
                <Link to='/' className='navElement'>
                    Work
                </Link>
                <a href={ resume } className='navElement' target="_blank">
                    Resume
                </a>
                <Link to='/about' className='navElement'>
                    About
                </Link>
                <Link to='/'>
                    <h1 className='portfolioName'>
                        Eric Jacobson
                    </h1>
                </Link>
            </div>
        );
    }
}

export default withRouter(NavBar);