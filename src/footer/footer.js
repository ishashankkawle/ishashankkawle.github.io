import React , { Component } from 'react'
import inputValues from '../Inputs'
import './footer.css';

class Footer extends Component
{
    constructor()
    {
        super();
        this.emailArray = inputValues["emailArray"];
        this.contactAray = inputValues["contactAray"];
        this.address = inputValues["address"];
    }
    render()
    {
        let emailList = [];
        let contactList = [];
        for (let index = 0; index < this.emailArray.length; index++) 
        {
            emailList.push(
                <span key={index} className="col-sm-12">{this.emailArray[index]}</span>
            );
        }
        for (let index = 0; index < this.contactAray.length; index++) 
        {
            contactList.push(
                <span key={index} className="col-sm-12">{this.contactAray[index]}</span>
            );
        }
        return (
            <div id="contact" className="row footer-banner">
                <div className="container">
                    <p className="h4 text-primary"> Lets say 'Hello' !!</p>
                    <blockquote>Want to start new colab project ? Or just say hello. Lets meet over for coffee</blockquote>
                </div>
                <div className="row footer-content">
                    <div className="col-sm-4 responsive-handle">
                        <p className="col-sm-12 h5">Email</p>
                        <div className="row">
                            {emailList}
                        </div>
                    </div>
                    <div className="col-sm-4 responsive-handle">
                        <p className="col-sm-12 h5">Contact</p>
                        <div className="row">
                            {contactList}
                        </div>
                    </div>
                    <div className="col-sm-4 responsive-handle">
                        <p className="col-sm-12 h5">Address</p>
                        <div className="row">
                            <span className="col-sm-12">{this.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;