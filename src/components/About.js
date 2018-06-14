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
                        Informatics in June 2018. My passion is creating technology that has a deep impact and improves the lives
                        of users. I have always enjoyed building new things and being able to use my analytical skills to solve
                        complex problems. <br/> <br/> When I'm not coding, you can find me at the nearest cofee shop, working out at the gym
                        or hiking at one of the many beautiful hiking trails in the PNW. <br/> <br/>I'm always open to working on interesting
                        projects, feel free to reach out <br/> - <a className='contact' href='mailto:eric.jj96@gmail.com' alt='email'>eric.jj96@gmail.com</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default About;