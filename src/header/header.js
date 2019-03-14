import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="main-header clearfix" data-sticky_header="true" >
                <div className="top-bar clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <p>
                                    <span><i className="fa fa-building-o"></i> <strong>Contact: </strong>Marala road Sialkot 51310</span>
                                    <span>&nbsp;<i className="fa fa-phone"></i> <strong>&nbsp;&nbsp;&nbsp;Call Us:</strong> +92-303-2700935</span>
                                </p>
                            </div>
                            <div className="col-md-4col-sm-12">
                                <div className="top-bar-social">
                                    <a href="#"><i className="fa fa-facebook rounded-box"></i></a>
                                    <a href="#"><i className="fa fa-twitter rounded-box"></i></a>
                                    <a href="#"><i className="fa fa-google-plus rounded-box"></i></a>
                                    <a href="#"><i className="fa fa-instagram rounded-box"></i></a>
                                    <a href="#"><i className="fa fa-youtube rounded-box"></i></a>
                                </div>   
                            </div> 
                        </div>
                    </div> 
                </div>
                <section className="header-wrapper navgiation-wrapper">
                    <div className="navbar navbar-default">      
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <NavLink className='logo' to='/'><img alt="" src="./images/logo.png" /></NavLink>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <NavLink to='/'>Home</NavLink>
                                    </li>                                
                                    <li>
                                        <NavLink to='/contact'>Contact</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/process'>Process</NavLink>
                                    </li>                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        );
    }
}

export default Header;
