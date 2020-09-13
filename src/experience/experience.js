import React, { Component } from 'react';
import './experience.css'

class Experience extends Component {
    constructor() {
        super();
        this.exprObj = {};

    }

    render() {
        return (
            <div id="experience" className="row banner-experience">
                <div className="col-sm-12">
                    <h4 className="text-primary"> My experience and achivements</h4>
                </div>
                <div className=" container timeline-xp">
                    <ul>
                        <li className="align-items-center">
                            <div className="exp-content">
                                <div className="exp-content-header">
                                    <b>Azure Fundamentals Certification<br></br><small className="text-muted">11-01-2020</small></b>
                                </div>
                                <div>
                                    <small>
                                        Successfully cleared the exam for Azure Fundamentals provided by Microsoft (AZ-900).
                                        </small>
                                </div>
                            </div>
                        </li>
                        <li className="align-items-center">
                            <div className="exp-content">
                                <div className="exp-content-header">
                                    <b>Vistaar Technologies<br></br><small className="text-muted">02-07-2018</small></b>
                                </div>
                                <div>
                                    <small>Over at Vistaar Technologies I worked as Backend developer and data engieer with Javascrpt and databases like MSSQL and Oracle SQL for more than 2 years.</small>
                                </div>
                            </div>
                        </li>
                        <li className="align-items-center">
                            <div className="exp-content">
                                <div className="exp-content-header">
                                    <b>Bachlor of Engineering<br></br><small className="text-muted">June-2028</small></b>
                                </div>
                                <div>
                                    <small>Graduated as Bachelor of Engineering from Athatva College of Engineering affiliated by Mumbai University with CGPA of 7.60</small>
                                </div>
                            </div>
                        </li>
                        <li className="align-items-center">
                            <div className="exp-content">
                                <div className="exp-content-header">
                                    <b>iMac Co-ordinator<br></br><small className="text-muted">June-2016</small></b>
                                </div>
                                <div>
                                    <small>Participated as iMac lab Co-ordinator which comprises of conducting sessions on developing ios application using XCODE for students.</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Experience;