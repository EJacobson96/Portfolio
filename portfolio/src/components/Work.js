import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Project from './Project';
import Footer from './Footer';

//import images
import movieCurator from '../images/movieCurator.png';
import milestone from '../images/milestone.png'
import linkedIn from'../images/linkedin.png';
import github from '../images/github.png';
import mail from '../images/mail.png';
import facebook from '../images/facebook.png';

import '../css/Work.css';

class Work extends Component {
    render() {
        return (
            <div>
                <p className='workDesc'>
                    Nulla proident eu tempor non occaecat anim qui officia. Dolore non irure Lorem 
                    fugiat eiusmod occaecat eu veniam amet proident et non. Aliquip id consequat magna veniam 
                    mollit nulla sunt amet commodo. Cupidatat sit ad esse cillum in cupidatat cillum ea amet officia 
                    veniam sint officia. Nulla culpa velit commodo proident nostrud Lorem commodo nulla ut elit aliqua elit. 
                    Id nisi dolor cupidatat pariatur incididunt culpa incididunt et enim labore veniam esse.
                </p>
                <Project
                    projects = { [
                        {
                            Title: 'Milestone',
                            Img: milestone,
                            Desc: 'Milestone is a responsive web application that empowers youth and young adults experiencing '
                            + 'unstable housing to a path a stability.',
                            Sponsor: "*Sponsored by the City of Seattle's Innovation & Performance Team",
                            Technologies: 'Technologies: React, Go, MongoDB, Docker, WebSockets',
                            SourceCode: '',
                            LiveSite: ''
                        },
                        {
                            Title: 'Typy-Bird',
                            Img: '',
                            Desc: 'Typy Bird is a multiplayer web-based typing game. Players up to 4 can share a single game '
                            + 'room and play against each other. The first player to get to the finish line first, wins!',
                            Technologies: 'Technologies: TypeScript, Canvas, Go, MongoDB, Docker, WebSockets',
                            SourceCode: '',
                            LiveSite: ''
                        },
                        {
                            Title: 'The Movie Curator',
                            Img: movieCurator,
                            Desc: "A movie curating platform built using React, utilizing The Movie Database API. Check out what "
                            + "movies are currently in theatres and keep a personal list of all your favorites!",
                            Technologies: 'Technologies: React, Firebase, The Movie Databae API',
                            SourceCode: '',
                            LiveSite: ''
                        },
                        {
                            Title: 'Placeholder',
                            Img: '',
                            Desc: 'ToDo',
                            Technologies: '',
                            SourceCode: '',
                            LiveSite: ''
                        }
                    ] }
                />
                <Footer 
                    socials = { [
                        mail,
                        facebook,
                        linkedIn, 
                        github
                    ] }
                />
            </div>
        );
    }
}

export default Work;