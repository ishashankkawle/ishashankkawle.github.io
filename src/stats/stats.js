import React , { Component } from 'react'
import inputValues from '../Inputs'
import './stats.css'

class  Stats extends Component 
{
    constructor()
    {
        super();
        this.booksRead = inputValues["booksRead"];
        this.treksCompleted = inputValues["treksCompleted"];
        this.projectsCompleted = inputValues["projectsCompleted"];
        this.happyFriends = inputValues["happyFriends"];
        this.statsArray = inputValues["stats"];
        this.statsLimit = inputValues["statsLimit"];
    }

    render()
    {
        let statsList = [];
        for (let index = 0; index < this.statsLimit; index++) 
        {
            const statsObj = this.statsArray[index];
            statsList.push(
                <div className="col-sm-3 stats-block">
                    <span className="display-4">{statsObj["value"]}</span><br></br>
                    <b className="text-primary">{statsObj["name"]}</b>
                </div>
            );
        }
        return(
                <div className="row stats-bar">
                    {statsList}
                </div>
        )
    }
}

export default Stats