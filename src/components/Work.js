import React, { Component } from 'react';
import Project from './Project';

//import images
import typieBird from '../images/typie-bird.png'
import movieCurator from '../images/movieCurator.png';
import milestone from '../images/milestone.png'
import weEat from '../images/weEat.png';

import '../css/Work.css';

class Work extends Component {
    render() {
        return (
            <div>
                <div className='workDesc'>
                    <h5>Hello! &mdash;</h5> 
                    <br />
                    <p>
                        My name is Eric and I'm a Software Developer based in the Seattle area.
                        I'm a recent graduate of the Informatics major at the University of Washington.
                        The projects below are just a few that I've been a part of over the last two years in Informatics.
                    </p>
                </div>
                <Project
                    projects = { [
                        {
                            Title: 'Milestone',
                            Img: milestone,
                            Desc: 'Milestone is a responsive web application that empowers youth and young adults experiencing '
                            + 'unstable housing to a path of stability.',
                            Sponsor: "*Sponsored by the City of Seattle's Innovation & Performance Team",
                            Technologies: 'Technologies: React, Go, MongoDB, Docker, WebSockets',
                            SourceCode: 'https://github.com/EJacobson96/Milestone',
                            LiveSite: 'https://milestoneapp.org'
                        },
                        {
                            Title: 'Typie-Bird',
                            Img: typieBird,
                            Desc: 'Typie Bird is a multiplayer web-based typing game. Up to 4 players can share a single game '
                            + 'room and play against each other. The first player to get to the finish line first wins!',
                            Technologies: 'Technologies: TypeScript, Canvas, Go, MongoDB, Docker, WebSockets',
                            SourceCode: '',
                            LiveSite: 'Offline'
                        },
                        {
                            Title: 'WeEat',
                            Img: weEat,
                            Desc: 'WeEat is a mobile app designed to connect food lovers to local chefs that specialize in cooking '
                            + 'authentic cuisines. This was a UX project in my Rapid Prototyping class that was centered around usability testing.',
                            Technologies: 'Technologies: Figma, InVision',
                            SourceCode: '',
                            LiveSite: '',
                            ProtoType: 'https://projects.invisionapp.com/share/9MIDX3QHU2C#/screens'
                        },
                        {
                            Title: 'The Movie Curator',
                            Img: movieCurator,
                            Desc: "A movie curating platform built using React, utilizing The Movie Database API. Check out what "
                            + "movies are currently in theatres and keep a personal list of all your favorites!",
                            Technologies: 'Technologies: React, Firebase, The Movie Database API',
                            SourceCode: 'https://github.com/EJacobson96/movie-curator',
                            LiveSite: 'http://owenflannigan.me/movie-curator'
                        }
                    ] }
                />
            </div>
        );
    }
}

export default Work;