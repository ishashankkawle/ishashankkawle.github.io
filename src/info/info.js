import React, { Component } from 'react'
import './info.css'

class Info extends Component {
    constructor() {
        super();

        this.yearsOfExp = '2';
        this.languages = ["Angular" , "Azure" , "Javascript" , "Dotnet Core" , "C-Sharp" , "MSSQL" , "Java" , "HTML + CSS" , "ReactJS"];
        this.angularProfficiency = 60;
        this.azureProfficiency = 70;
        this.javascriptProfficiency = 75;
        this.dotnetcoreProfficiency = 70;
        this.csharpProfficiency = 75;
        this.mssqlProfficiency = 70;
        this.javaProfficiency = 75;
        this.htmlcssProfficiency = 80;
        this.reactjsProfficiency = 65;

        this.mapLanguageToProff = {
            "Angular" : this.angularProfficiency,
            "Azure" : this.azureProfficiency,
            "Javascript" : this.javascriptProfficiency,
            "Dotnet Core" : this.dotnetcoreProfficiency,
            "C-Sharp" : this.csharpProfficiency,
            "MSSQL" : this.mssqlProfficiency,
            "Java" : this.javaProfficiency,
            "HTML + CSS" : this.htmlcssProfficiency,
            "ReactJS" : this.reactjsProfficiency
        }
        
    }

    createProgresssStyleObj(value)
    {
        return { "width" : value + "%" }
    }

    render() {

        let items = [];
        for (let index = 0; index < this.languages.length; index++) {
            let language = this.languages[index];
            let proff = this.mapLanguageToProff[language];
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

        return (
            <div className="row">
                <div className="col-sm-6 banner-self-info text-left">
                    <h4 className="text-primary info-sec-header">Greetings !!</h4>
                    <blockquote>I am an IT Engineer from Mumbai University graduated in June, 2018. I have professional experience of {this.yearsOfExp} years and also an Azure Fundamentalist.</blockquote>
                    <blockquote>I love to solve the technical challages and to keep on learning new things. I started my journey in the field of programming from 2012. I started creating mini project as a part of second year curriculum to learn different kinds of technologies and how to integrated them together to for complete system. Studying different concepts of legecy coding, fundamentals of programing helped me to create a concrete base of Software Developer.</blockquote>
                    <blockquote>As a part of this journey I attended variours in-house events / tech meetups and also participated as iMac co-ordinator in Athatva College of Engineering for 2 years. I also self taught different technolodies like .NET Core , Bot Framework , Angular , Git & Github , DialogFlow and much more ...with excellency in languages C# , Java , Javascript , HTML , CSS , SQL.</blockquote>
                    <blockquote>Over the years,I came to understand that field of sofware developemnt is like an open sandbox box of things. To create solutions with top notch developemnt techniques, integreting them with best Devops methods and create unique experiences is joy of my life. </blockquote>
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