import React, { Component } from 'react';
import inputValues from '../Inputs'
import './experience.css'

class Experience extends Component {
    constructor() {
        super();

        this.timeline = inputValues["timeline"];
    }

    render() {
        let items = []
        for (let index = 0; index < this.timeline.length; index++) 
        {      
            let obj = this.timeline[index]; 
            let contents = ""
            if (obj.imagePath !== undefined) 
            {
                contents = (<div className="row exp-content">
                <div className="col-sm-3 align-self-center justify-content-center">
                    <img className="exp-content-image" src={obj.imagePath} />
                </div>
                <div className="col-sm-8">
                    <div className="exp-content-header">
                        <b>{obj.title}<br></br><small className="text-muted">{obj.date}</small></b>
                    </div>
                    <div>
                        <small>{obj.text}</small>
                    </div>
                </div>
            </div>)
            } 
            else
            {
                contents = (<div className="exp-content">
                <div className="exp-content-header">
                    <b>{obj.title}<br></br><small className="text-muted">{obj.date}</small></b>
                </div>
                <div>
                    <small>{obj.text}</small>
                </div>
            </div>)
            }                     
            items.push(
                <li key={index} className="align-items-center">
                    {contents}
                </li>
            );
        }

        return (
            <div id="experience" className="row banner-experience">
                <div className="col-sm-12">
                    <h4 className="text-primary"> My experience and achivements</h4>
                </div>
                <div className=" container timeline-xp">
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        )
    }

}

export default Experience;