import React, { Component } from 'react';

class Process extends Component {
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "/js/custom-scripts.js";
        script.async = true;
    
        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <section className="section-content-block section-pure-white-bg" >
                    <div className="container">
                        <div className="row">
                            <div className="highlight-carousel owl-carousel"  data-nav="false" data-dots="true">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="highlight-layout-1 animate-icon-rotate-up text-center">
                                    <figure className="wow fadeInUp"><img src="images/highlight_1.png" alt="" /></figure>
                                    <h5><a href="#">Furnished Rooms</a></h5>
                                    <p>Quisque imperdiet porta imperdiet nam venenatis quam pulvinar porta sem</p>
                                </div> 
                            </div> 
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="highlight-layout-1 text-center">
                                    <figure className="wow fadeInUp"><img src="images/highlight_2.png" alt="" /></figure>
                                    <h5>Daily Fitness Training</h5>
                                    <p>Quisque imperdiet porta imperdiet nam venenatis quam pulvinar porta sem</p>
                                </div> 
                            </div> 
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="highlight-layout-1 text-center">
                                    <figure className="wow fadeInUp"><img src="images/highlight_3.png" alt="" /></figure>
                                    <h5>Affordable Pricing</h5>
                                    <p>Quisque imperdiet porta imperdiet nam venenatis quam pulvinar porta sem</p>
                                </div> 
                            </div> 
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="highlight-layout-1 text-center">
                                    <figure className="wow fadeInUp"><img src="images/highlight_4.png" alt="" /></figure>
                                    <h5>24/7 Security Guards</h5>
                                    <p>Quisque imperdiet porta imperdiet nam venenatis quam pulvinar porta sem</p>
                                </div> 
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <div className="highlight-layout-1 text-center">
                                    <figure className="wow fadeInUp"><img src="images/highlight_5.png" alt="" /></figure>
                                    <h5>Award Wining Support</h5>
                                    <p>Quisque imperdiet porta imperdiet nam venenatis quam pulvinar porta sem</p>
                                </div> 
                            </div> 
                            </div>
                        </div>
                    </div> 
                </section>
                <section className="section-content-block section-secondary-bg">
                    <div className="container">
                        <div className="row section-heading-wrapper">
                            <div className="col-md-12 col-sm-12">
                                <h2><span>Donation</span> Process</h2>
                                <h4>The donation process from the time you arrive center until the time you leave</h4>
                            </div>                    
                        </div> 
                        <div className="row wow fadeInUp">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="process-layout">
                                    <figure className="process-img">
                                        <img src="images/process_1.jpg" alt="process" />
                                        <div className="step">
                                            <h3>1</h3>
                                        </div>
                                    </figure>
                                    <article className="process-info">
                                        <h2>Registration</h2>   
                                        <p>You need to complete a very simple registration form. Which contains all required contact information to enter in the donation process.</p>
                                    </article>
                                </div> 
                            </div> 
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="process-layout">
                                    <figure className="process-img">
                                        <img src="images/process_2.jpg" alt="process" />
                                        <div className="step">
                                            <h3>2</h3>
                                        </div>
                                    </figure>
                                    <article className="process-info">                                   
                                        <h2>Screening</h2>
                                        <p>A drop of blood from your finger will take for simple test to ensure that your blood iron levels are proper enough for donation process.</p>
                                    </article>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="process-layout">
                                    <figure className="process-img">
                                        <img src="images/process_3.jpg" alt="process" />
                                        <div className="step">
                                            <h3>3</h3>
                                        </div>
                                    </figure> 
                                    <article className="process-info">
                                        <h2>Donation</h2>
                                        <p>After ensuring and passed screening test successfully you will be directed to a donor bed for donation. It will take only 6-10 minutes.</p>
                                    </article>
                                </div> 
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="process-layout">
                                    <figure className="process-img">
                                        <img src="images/process_4.jpg" alt="process" />
                                        <div className="step">
                                            <h3>4</h3>
                                        </div>
                                    </figure> 
                                    <article className="process-info">
                                        <h2>Refreshment</h2>
                                        <p>You can also stay in sitting room until you feel strong enough to leave our center. You will receive drink from us in donation zone. </p>
                                    </article>
                                </div> 
                            </div> 
                        </div> 
                    </div> 
                </section>
                <section className="section-content-block">
                    <div className="container">
                        <div className="row section-heading-wrapper">
                            <div className="col-md-12 col-sm-12 text-center no-img-separator">
                                <h4>Testimonials</h4>
                                <span className="heading-separator heading-separator-horizontal"></span>
                                <h2 className="extra-large">OUR DONORS FEEDBACK</h2>
                            </div> 
                        </div>
                        <div className="row section-secondary-bg">          
                            <div className="testimonial-container owl-carousel text-center" data-items  ="1">
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="testimony-layout-1">
                                        <p className="testimony-text">                                 
                                            Always friendly, honest service. Comparable prices and good advice. I appreciate the ride to work too and delivered to my work the same day it broke down.
                                            Lorem ipsum dolor sit amet diam brute integre eapri. Per fugitzril apeirian cumea eaap pareat euripidi utmel graeci doming. Duo dicat apeirian facilisi ne. 
                                        </p>
                                        <div className="testimony-info">
                                            <img className="img-responsive" src="images/user_2.jpg" alt="Client Image" />
                                            <h6>Brandon Munson </h6>
                                            <span>CTO, Fulcrum Design</span>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="testimony-layout-1">
                                        <p className="testimony-text">                                 
                                            Always friendly, honest service. Comparable prices and good advice. I appreciate the ride to work too and delivered to my work the same day it broke down.
                                            Lorem ipsum dolor sit amet diam brute integre eapri. Per fugitzril apeirian cumea eaap pareat euripidi utmel graeci doming. Duo dicat apeirian facilisi ne. 
                                        </p>
                                        <img className="img-responsive" src="images/user_3.jpg" alt="Client Image" />
                                        <div className="testimony-info">
                                            <h6>Sunnybrook Church </h6>
                                            <span>CEO, HW Tech Inc</span>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div className="testimony-layout-1">
                                        <p className="testimony-text">                                 
                                            Always friendly, honest service. Comparable prices and good advice. I appreciate the ride to work too and delivered to my work the same day it broke down.
                                            Lorem ipsum dolor sit amet diam brute integre eapri. Per fugitzril apeirian cumea eaap pareat euripidi utmel graeci doming. Duo dicat apeirian facilisi ne. 
                                        </p>
                                        <img className="img-responsive" src="images/user_1.jpg" alt="Client Image" />     
                                        <div className="testimony-info">
                                            <h6>Sunnybrook Church </h6>
                                            <span>CEO, BW Tech Inc</span>
                                        </div>
                                    </div>    
                                </div>            
                            </div>                    
                        </div> 
                    </div> 
                </section>
            </div>
        );
    }
}

export default Process;
