import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import '../css/Project.css';

class Project extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let projects = this.props.projects.map((project) => {
                            return (
                                <div className='projectElement' style={{ backgroundImage: `url(${project.Img})` }}> 
                                    <div className='projectOverlay' />
                                    <div className='projectDetails'>
                                        <h2>{ project.Title }</h2>
                                        <p>{ project.Desc }</p>
                                        <p>{ project.Technologies }</p>
                                        <p className='projectSponsor'>{ project.Sponsor }</p>
                                    </div>
                                </div>
                            );
                        })
        return (
            <div className='projectContainer'> 
                { projects }
            </div>
        );
    }
}

export default Project;