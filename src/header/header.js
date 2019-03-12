import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header class="main-header clearfix" data-sticky_header="true" >
                <div class="top-bar clearfix">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-12">
                                <p>
                                    <span><i class="fa fa-building-o"></i> <strong>Contact: </strong>Marala road Sialkot 51310</span>
                                    <span>&nbsp;<i class="fa fa-phone"></i> <strong>&nbsp;&nbsp;&nbsp;Call Us:</strong> +92-303-2700935</span>
                                </p>
                            </div>
                            <div class="col-md-4col-sm-12">
                                <div class="top-bar-social">
                                    <a href="#"><i class="fa fa-facebook rounded-box"></i></a>
                                    <a href="#"><i class="fa fa-twitter rounded-box"></i></a>
                                    <a href="#"><i class="fa fa-google-plus rounded-box"></i></a>
                                    <a href="#"><i class="fa fa-instagram rounded-box"></i></a>
                                    <a href="#"><i class="fa fa-youtube rounded-box"></i></a>
                                </div>   
                            </div> 
                        </div>
                    </div> 
                </div>
                <section class="header-wrapper navgiation-wrapper">
                    <div class="navbar navbar-default">      
                        <div class="container">
                            <div class="navbar-header">
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                                <a class="logo" href="index.html"><img alt="" src="./images/logo.png" /></a>
                            </div>
                            <div class="navbar-collapse collapse">
                                <ul class="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="#">Home</a>
                                        <ul class="drop-down">
                                            <li><a href="index.html" title="Home Layout 01">Home 01</a></li>
                                            <li><a href="home-2.html" title="Home Layout 02">Home 02</a></li>
                                        </ul>
                                    </li>                                
                                    <li><a href="about-us.html" title="About Us">About Us</a></li>
                                    <li>
                                        <a href="#">Campaign</a>
                                        <ul class="drop-down">
                                            <li><a href="events.html">All Campaigns</a></li>
                                            <li><a href="event-single.html">Single Campaign</a></li>
                                        </ul>
                                    </li>
                                    <li class="drop"><a href="#">Pages</a>
                                        <ul class="drop-down">
                                            <li class="drop"><a href="#">Elements</a>
                                                <ul class="drop-down level3">
                                                    <li><a href="element-cta.html">CTA/PROMO BOX</a></li>
                                                    <li><a href="element-counter.html">Fun Facts</a></li>
                                                    <li><a href="element-logos.html">Logos/Clients</a></li>
                                                    <li><a href="element-process.html">Process</a></li>
                                                    <li><a href="element-highlights.html">Highlights Box</a></li>
                                                    <li><a href="element-service.html">Services</a></li>
                                                    <li><a href="element-subscribe.html">Subscribe</a></li>
                                                    <li><a href="element-team.html">Team</a></li>
                                                    <li><a href="element-feedback.html">Testimonials</a></li>
                                                </ul>
                                            </li>
                                            <li class="drop"><a href="#">Gallery</a>
                                                <ul class="drop-down level3">
                                                    <li><a href="gallery-1.html">Layout 01</a></li> 
                                                    <li><a href="gallery-2.html">Layout 02</a></li> 

                                                </ul>
                                            </li>
                                             <li><a href="faq.html" title="FAQ">FAQ</a></li>
                                            <li><a href="404.html" title="404 Page">404 Page</a></li> 
                                            <li class="drop"><a href="#">Level 3</a>
                                                <ul class="drop-down level3">
                                                    <li><a href="#">Level 3.1</a></li>
                                                    <li><a href="#">Level 3.2</a></li>
                                                    <li><a href="#">Level 3.3</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                        <ul class="drop-down">
                                            <li><a href="blog.html">All Posts</a></li> 
                                            <li><a href="single.html">Single Page</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
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
