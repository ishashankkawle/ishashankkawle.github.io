import React , { Component } from 'react'
import './about.css'

class About extends Component
{
    constructor()
    {
        super();
        let dob = "03-03-1997";
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
                <blockquote><p>I am {this.age} years old and currently living in Mumbai. I love to read novels of Dan Brown especially Robart Langdon series. I also like to swim and draw as hobbies. In my free time I love to watch sci-fi / horror movies or go out on trekking.</p></blockquote>
            </div>

        </div>
        )
    }
}

export default About