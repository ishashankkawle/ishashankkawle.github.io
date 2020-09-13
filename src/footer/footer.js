import React , { Component } from 'react'
import './footer.css';

class Footer extends Component
{

    render()
    {
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
                            <span className="col-sm-12">shankextream@gmail.com</span>
                            <span className="col-sm-12">shashankkawe67@gmail.com</span>
                        </div>
                    </div>
                    <div className="col-sm-4 responsive-handle">
                        <p className="col-sm-12 h5">Contact</p>
                        <div className="row">
                            <span className="col-sm-12">7400322062</span>
                        </div>
                    </div>
                    <div className="col-sm-4 responsive-handle">
                        <p className="col-sm-12 h5">Address</p>
                        <div className="row">
                            <span className="col-sm-12">Mitrata society, plot no.70, Room no. C-8, Gorai-1, Boriwali west, Mumbai - 400092</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;