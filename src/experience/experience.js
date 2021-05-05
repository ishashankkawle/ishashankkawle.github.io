import React, { Component } from 'react';
import inputValues from '../Inputs'
import './experience.css'

class Experience extends Component {
    constructor(props) 
    {
        super(props);
        this.state = {isFullView : false};
        this.listLength = 3;
        this.timeline = inputValues["timeline"];
        this.enableFullView = this.enableFullView.bind(this);
    }

    getListLength()
    {
        if(!this.state.isFullView)
        {
            if(this.timeline.length < 3)
            {
                this.listLength = this.timeline.length;
            }
        }
        else
        {
            this.listLength = this.timeline.length;
        }
        return this.listLength;
    }

    enableFullView()
    {
        console.log("enabling full view")
        this.setState({isFullView : true})
        console.log("State : " + this.state);
    }

    render() 
    {
        console.log(" Executing render")
        let items = []
        let totalLength = this.getListLength();

        console.log("List length = " + totalLength);
        for (let index = 0; index < totalLength; index++) 
        {      
            let obj = this.timeline[index]; 
            let contents = "";
            if (obj.imagePath !== undefined) 
            {
                contents = (<div className="row exp-content">
                <div className="col-sm-3 align-self-center justify-content-center">
                    <img className="exp-content-image" src={obj.imagePath} alt="Certificate" />
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
                {!this.state.isFullView &&

                    <div className="container pb-5">
                        <button type="button" className="btn btn-outline-dark btn-circle" onClick={this.enableFullView}>
                            <ion-icon class="timeline-expand-btn" name="arrow-down-outline"></ion-icon>
                        </button>
                    </div>
                }
            </div>
        )
    }

}

export default Experience;