import React, { Component } from 'react'
import './navigator.css'

class Navigator extends Component {
    constructor() {
        super();
        this.state = {
            navbarState: {
                background: "transparent",
                color: "white"
            },
            openState : false,
            inBannerSection : true,
        };

        this.colorChangeOnScroll = this.colorChangeOnScroll.bind(this);
        this.bodyFocusToggle = this.bodyFocusToggle.bind(this);
    };

    bodyFocusToggle()
    {
        console.log("Inside toggle function");
        if(!this.state.openState)
        {
            document.getElementById('main-nav').style.background = "rgb(42,44,46)"
        }
        else
        {
            if(this.state.inBannerSection)
            {
               document.getElementById('main-nav').style.background = "transparent"
            }
            else
            {
                document.getElementById('main-nav').style.background = "#2A2C2E"
            }
            document.getElementById('main-nav').style.transition = "0.5s"
        }
        let negState = !this.state.openState;
        this.setState({
            openState : negState
        });
    }

    componentDidMount()
    {
        window.addEventListener('scroll', this.colorChangeOnScroll)
    }

    colorChangeOnScroll() 
    {
        let block = document.getElementById("about");
        let blockAttrs = block.getBoundingClientRect();
        if (blockAttrs.top < 20) 
        {
            this.setState({inBannerSection : false});
            this.setState({ navbarState: { background: "#2A2C2E", color: "white", transition:"0.5s" } });
        }
        else
        {
            this.setState({inBannerSection : true});
            this.setState({ navbarState: { background: "transparent", color: "white", transition:"0.5s" } });
        }
    }

    render() {
        return (

            <nav id="main-nav" className="navbar navbar-expand-lg fixed-top main-navbar" style={this.state.navbarState}>
                <button onClick={this.bodyFocusToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span ><ion-icon name="menu"></ion-icon></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="nav ml-auto ml-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navigator;