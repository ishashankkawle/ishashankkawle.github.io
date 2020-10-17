import React, { Component } from 'react'
import inputValues from '../Inputs.js'
import './header.css'

class Header extends Component {

    constructor() {
        super();
        this.name = inputValues["name"]
        this.intro = inputValues["intro"]
    }

    render() {
        return (
            <div id="header" className="row">
                <div className="col-sm-12 banner-style-block" >
                    <div className="banner-shadow"></div>
                    <div className="row banner-header justify-content-between align-items-center">
                        <div className="col-sm-5 text-left banner-header-text">
                            <div className="banner-header-content">
                                <h4 className="text-primary"> Hello fellas...!</h4>
                                <h1 className="text-sec"> {this.name} </h1>
                                <h1 className="text-sec"> {this.intro} </h1>
                            </div>
                        </div>
                        <div className="col-sm-5 text-right banner-btn-sec">
                            <a href="#project"><button type="button" className="btn btn-outline-light btn-header">Latest projects</button></a><br></br><br></br>
                            <a href="#about"><button type="button" className="btn btn-outline-light btn-header">More about me</button></a>
                        </div>
                        <div className="col-sm-1 social-link">
                            <ul className="nav flex-column social-link-list">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.linkedin.com/in/ishashankkawle"><ion-icon class="v-nav-logo" name="logo-linkedin"></ion-icon></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/ishashankkawle/"><ion-icon class="v-nav-logo" name="logo-facebook"></ion-icon></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://github.com/ishashankkawle"><ion-icon class="v-nav-logo" name="logo-github"></ion-icon></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="https://gitlab.com/shashankkawle"><ion-icon class="v-nav-logo" name="logo-gitlab"></ion-icon></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;