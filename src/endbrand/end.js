import React, { Component } from 'react';
import Logo from '../assets/name_lg_b.png';
import './end.css'

class End extends Component {
    
    render() {
        return (
            <div className="col-sm-12">
                <img src={Logo} alt="logo"/>
                <div className="row end-ribbon">
                    <div className="container">
                        <div className="btn-group ribbon-btn-group" role="group">
                            <a href="https://github.com/ishashankkawle" className="end-ribbon-btn align-items-center"><ion-icon class="end-ribbon-btn-logo" name="logo-github"></ion-icon> <span className="responsive-btn-handle">Github</span></a>
                            <a href="https://www.facebook.com/ishashankkawle/" className="end-ribbon-btn rbn-btn-inner align-items-center"><ion-icon class="end-ribbon-btn-logo" name="logo-facebook"></ion-icon> <span className="responsive-btn-handle">Facebook</span></a>
                            <a href="https://www.linkedin.com/in/ishashankkawle" className="end-ribbon-btn rbn-btn-inner align-items-center"><ion-icon class="end-ribbon-btn-logo" name="logo-linkedin"></ion-icon> <span className="responsive-btn-handle">linkdin</span></a>
                            <a href="https://gitlab.com/shashankkawle" className="end-ribbon-btn align-items-center"><ion-icon class="end-ribbon-btn-logo" name="logo-gitlab"></ion-icon> <span className="responsive-btn-handle">Gitlab</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default End;