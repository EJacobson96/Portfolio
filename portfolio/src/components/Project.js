import React, { Component } from 'react';

import '../css/Project.css';

class Project extends Component {
    render() {
        let projects = this.props.projects.map((project) => {
                            return (
                                <div className='projectElement' style={{ backgroundImage: `url(${project.Img})` }}> 
                                    <div className='projectOverlay' />
                                    <div className='projectDetails'>
                                        <h2>{ project.Title }</h2>
                                        <p>{ project.Desc }</p>
                                        { 
                                            project.Technologies &&
                                            <p>{ project.Technologies }</p>
                                        }
                                        { 
                                            project.Sponsor &&
                                            <p className='projectSponsor'>{ project.Sponsor }</p>
                                        }
                                        <div className='projectLinks'>
                                            {
                                                project.SourceCode && 
                                                <a href={ project.SourceCode } target='_blank' className='projectLink'>Source Code</a> 
                                            }
                                            {
                                                project.LiveSite &&
                                                (project.LiveSite === 'Offline' ? <p>*Site is not currently being hosted</p> :
                                                <a href={ project.LiveSite } target='_blank' className='projectLink'>Live Site</a>)
                                            }
                                            {
                                                project.ProtoType &&
                                                <a href={ project.ProtoType } target='_blank' className='projectLink'>View Prototype</a>
                                            }
                                        </div>
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