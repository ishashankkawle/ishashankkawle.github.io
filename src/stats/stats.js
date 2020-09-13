import React , { Component } from 'react'
import './stats.css'

class  Stats extends Component 
{
    constructor()
    {
        super();
        this.booksRead = "+50";
        this.treksCompleted = "7";
        this.projectsCompleted = "12";
        this.happyFriends = ">200";
    }

    render()
    {
        return(
                <div className="row stats-bar">
                    <div className="col-sm-3 stats-block">
                        <span className="display-4">{this.booksRead}</span><br></br>
                        <b className="text-primary">Books read</b>
                    </div>
                    <div className="col-sm-3 stats-block">
                        <span className="display-4">{this.treksCompleted}</span><br></br>
                        <b className="text-primary">Treks Completed</b>
                    </div>
                    <div className="col-sm-3 stats-block">
                        <span className="display-4">{this.projectsCompleted}</span><br></br>
                        <b className="text-primary">Projects Completed</b>
                    </div>
                    <div className="col-sm-3 stats-block">
                        <span className="display-4">{this.happyFriends}</span><br></br>
                        <b className="text-primary">Happy Friends</b>
                    </div>
                </div>
        )
    }
}

export default Stats