import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (   
            <footer>            
                <section className="footer-widget-area footer-widget-area-bg text-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="about-footer">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                            <img src="images/logo-footer.png" alt="" />
                                        </div> 
                                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                            <p>
                                                We are world largest and trustful blood donation center. We have been working since 1973 with a prestigious vision to helping patient to provide blood.
                                                We are working all over the world, organizing blood donation campaign to grow awareness among the people to donate blood.
                                            </p>
                                        </div> 
                                    </div> 
                                </div>
                            </div> 
                        </div>
                        <div className="row">                                             
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-widget">
                                    <div className="sidebar-widget-wrapper">
                                        <div className="footer-widget-header clearfix">
                                            <h3>Contact Us</h3>
                                        </div> 
                                        <div className="textwidget">                                       
                                            <i className="fa fa-envelope-o fa-contact"></i> <p><a href="#">support@donation.com</a><br/><a href="#">helpme@donation.com</a></p>
                                            <i className="fa fa-location-arrow fa-contact"></i> <p>Road-2,3/A East Shibgonj<br/>Sylhet-3100, Bangladesh</p>
                                            <i className="fa fa-phone fa-contact"></i> <p>Office:&nbsp; (+880) 0823 560 433<br/>Cell:&nbsp; (+880) 0723 161 343</p>                              
                                        </div>
                                    </div> 
                                </div> 
                            </div> 
                            <div className="col-md-4 col-sm-12 col-xs-12">
                                <div className="footer-widget clearfix">
                                    <div className="sidebar-widget-wrapper">
                                        <div className="footer-widget-header clearfix">
                                            <h3>Support Links</h3>
                                        </div>
                                        <ul className="footer-useful-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right fa-footer"></i>
                                                    Thalassemia
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right fa-footer"></i>
                                                    Cell Elofrosis
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right fa-footer"></i>
                                                    Myelodysasia
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right fa-footer"></i>
                                                    Blood Count
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right fa-footer"></i>
                                                    Hemolytimia
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right fa-footer"></i>
                                                    Ychromas Eosis 
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right fa-footer"></i>
                                                    Hyrcoagulable
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right fa-footer"></i>
                                                    Thrombo Xtosis
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right fa-footer"></i>
                                                    Sicklenemiaxs
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-caret-right fa-footer"></i>
                                                    Aplastic Anemia
                                                </a>
                                            </li>                                       
                                        </ul>
                                    </div>         
                                </div>            
                            </div> 
                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <div className="footer-widget">
                                    <div className="sidebar-widget-wrapper">
                                        <div className="footer-widget-header clearfix">
                                            <h3>Subscribe Us</h3>
                                        </div>
                                        <p>Signup for regular newsletter and stay up to date with our latest news.</p>
                                        <div className="footer-subscription">
                                            <p>
                                                <input id="mc4wp_email" className="form-control" required="" placeholder="Enter Your Email" name="EMAIL" type="email" />
                                            </p>
                                            <p>
                                                <input className="btn btn-default" value="Subscribe Now" type="submit" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </div> 
                    </div> 
                </section> 
                <section className="footer-contents">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-md-12 col-sm-12 text-center">
                                <p className="copyright-text"> Copyright 2018 - Blood Buddies by BlueWindLab. All Rights Reserved. </p>
                            </div> 
                        </div>                                 
                    </div> 
                </section> 
            </footer>
        );
    }
}

export default Footer;
