import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../css/Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='footer'> 
                <div className='socialMedia'>
                    {
                        this.props.socials.map((icon) => {
                            return (
                                    <div className='socialIcon'>
                                        <img src={icon} alt='social media' />
                                    </div>
                            );
                        })
                    }
                </div>
                <p>&copy; 2018 Eric Jacobson &mdash;</p>
            </div>
        );
    }
}

export default Footer;