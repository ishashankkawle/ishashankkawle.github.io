import React, { Component } from 'react'
import inputValues from '../Inputs'
import './info.css'

class Info extends Component {
    constructor() {
        super();
        this.yearsOfExp = inputValues["yearsOfExperience"];
        this.greetingTexts = inputValues["greetingTexts"];
        this.languagesArray = inputValues["languagesArray"];
    }

    createProgresssStyleObj(value)
    {
        return { "width" : value + "%" }
    }

    render() {

        let items = [];
        let greetingItems = [];
        for (let index = 0; index < this.languagesArray.length; index++) {
            let obj = this.languagesArray[index];
            let language = obj["lang"];
            let proff = obj["profficiency"];
            if (language === "Azure") 
            {
                language = <b>{language} <span className="badge badge-success">Microsoft Certified</span></b>
            }
            else if (language === "ReactJS") 
            {
                language = <b>{language} <span className="badge badge-secondary">New</span></b>
            }
            else
            {
                language = <b>{language}</b>
            }
            items.push(
                    <div key={index} className="col-sm-12 skill-bar-section">
                        <div className="row">
                            {language}
                        </div>
                        <div className="row align-items-center">
                            <div className="col-sm-10 skill-progress-bar"> 
                                <div className="progress skill-bar">
                                    <div className="progress-bar bg-danger" role="progressbar" style={ this.createProgresssStyleObj(proff) }></div>
                                </div>
                            </div>
                            <div className="col-sm-2 text-left">
                                <b>{proff}%</b>
                            </div>
                        </div>
                    </div>
            )   
        }

        for (let index = 0; index < this.greetingTexts.length; index++) 
        {
            var obj = this.greetingTexts[index]
            greetingItems.push(
                <blockquote>{obj}</blockquote>
            );    
        }

        return (
            <div className="row">
                <div className="col-sm-6 banner-self-info text-left">
                    <h4 className="text-primary info-sec-header">Greetings !!</h4>
                    {greetingItems}
                </div>


                <div className="col-sm-6 banner-self-info text-left">
                    <h4 className="text-primary info-sec-header">Some skills to show</h4>
                    {items}
                </div>
            </div>
        )
    }
}

export default Info