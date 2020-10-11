import React , { Component } from 'react'
import inputValues from '../Inputs.js'
import './about.css'

class About extends Component
{
    constructor()
    {
        super();
        let dob = inputValues["dob"];
        this.location = inputValues["location"];
        this.aboutText = inputValues["aboutyou"];
        this.age = this.calculateAge(dob);
    }

    calculateAge(date)
    {
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(date).getFullYear();
        return currentYear-birthYear;
    }

    render()
    {
        return (
        <div id="about" className="container banner-about-wrapper">
            <div  className="banner-about">
                <h4 className="text-primary">Some more about me</h4>
                <blockquote><p>I am {this.age} years old and currently living in {this.location}. {this.aboutText}</p></blockquote>
            </div>

        </div>
        )
    }
}

export default About