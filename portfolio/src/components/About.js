import React, { Component } from 'react';

import me from '../images/me.JPG';
import '../css/About.css';

class About extends Component {

    render() {
        return (
            <div className='about'> 
                <div className='imageContainer'>
                    <img className='aboutImage' src={ me } alt='Eric Jacobson' />
                </div>
                <div className='aboutDesc'> 
                    <h5>Hello! I'm Eric.</h5>
                    <p>
                        I recently graduated from the University of Washington with Bachelor of Science in 
                        Informatics in June 2018.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;