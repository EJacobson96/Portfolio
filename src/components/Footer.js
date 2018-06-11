import React, { Component } from 'react';

import '../css/Footer.css';

class Footer extends Component {

    render() {
        return (
            <div className='footer'> 
                <div className='socialMedia'>
                    {
                        this.props.socials.map((social) => {
                            return (
                                    <div className='socialIcon'>
                                        <a href={ social.Link } target='_blank'>
                                            <i className={ social.Icon } alt='social media' />
                                        </a>
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