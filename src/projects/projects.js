import React, { Component } from 'react';
import './projects.css'
import development from '../assets/App_development.png'
import NPMdevelopment from '../assets/NPM_development.jpeg'


class Projects extends Component {
    render() {
        return (
            <div id="projects" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#projects" data-slide-to="0" className="active"></li>
                    <li data-target="#projects" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row proj-slide-box">
                            <div className="col-sm-6 text-left">
                                <h1 className="proj-title">ETM Task Manager</h1>
                                <h5>This is Task Manager Desktop Application Template designed with ElecronJS , ES6 , NodeJs APIs and Bootstrap , vanilla HTML + CSS for UI designing.</h5>
                                <h5>Also integrsted with PostgreSQL as RDBMS and MongoDB hosted on MongoDB Atlas cloud for Non-structured data.</h5>
                                <span className="badge m-1 badge-pill badge-primary">ElectronJS</span><span className="badge m-1 badge-pill badge-warning"> Javascript</span><span className="badge m-1 badge-pill badge-secondary">HTML</span><span className="badge m-1 badge-pill badge-secondary">CSS</span><span className="badge m-1 badge-pill badge-success">Mongo</span><span className="badge m-1 badge-pill badge-info">PostgreSQL</span>
                                <br></br>
                                <br></br>
                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-2 align-middle" role="group" aria-label="First group">
                                        <a href="https://github.com/ishashankkawle/Electron-Task-Manager" className="btn btn-secondary"><ion-icon name="logo-github" style={{"fontSize":"20px","position": "relative","bottom": "-10%"}}></ion-icon> Github</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <img src={development} alt="development" height="334px" width="346px" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row proj-slide-box">
                            <div className="col-sm-6 text-left">
                                <h1 className="proj-title">Laniak Text Editor</h1>
                                <h5>Laniak Text Editor is re-usable text editor. It is designed as an Angular library with Angular 11.</h5>
                                <h5>It provives basic text editor functionality out of the box.</h5>
                                <h5>It is hosted as an NPM package hence will be easy to add and integrate in any Node project.</h5>
                                <span className="badge m-1 badge-pill badge-danger">Angular</span><span className="badge m-1 badge-pill badge-success"> Typescript</span><span className="badge m-1 badge-pill badge-secondary">HTML</span><span className="badge m-1 badge-pill badge-secondary">CSS</span>
                                <br></br>
                                <br></br>
                                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div className="btn-group mr-2 align-middle" role="group" aria-label="First group">
                                        <a href="https://github.com/ishashankkawle/Laniak-Text-Editor" className="btn btn-secondary"><ion-icon name="logo-github" style={{"fontSize":"20px","position": "relative","bottom": "-10%"}}></ion-icon> Github</a>
                                    </div>
                                    <div className="btn-group mr-2 align-middle" role="group" aria-label="First group">
                                        <a href="https://www.npmjs.com/package/laniak-text-editor" className="btn btn-danger"><ion-icon name="logo-npm" style={{"fontSize":"20px","position": "relative","bottom": "-10%"}}></ion-icon> NPM</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <img src={NPMdevelopment} alt="development" height="100%" width="60%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;