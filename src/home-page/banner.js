import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="slider-wrap">
                <div id="slider_1" className="owl-carousel" data-nav="true" data-dots="false" data-autoplay="true" data-autoplaytimeout="17000">
                    <div className="slider_item_container" data-bg_img="./images/home_1_slider_1.jpg" data-bg_color="#555555" data-bg_opacity="0.0">
                        <div className="item">
                            <div className="slider-content">
                                <div className="container text-left">
                                    <div className="row">
                                        <div className="slider-bg">                                    
                                            <div className="col-sm-12 wow zoomInUp" data-wow-duration="1s">  
                                                <h3>Donate blood,save life !</h3>
                                                <h2>
                                                    YOUR BLOOD  
                                                    <br />
                                                    CAN BRING SMILE  
                                                    <br />
                                                    IN OTHER PERSON FACE
                                                </h2>
                                                <a href="#" className="btn btn-theme margin-top-24">Donate Now</a>
                                                <a href="#" className="btn btn-theme btn-theme-invert margin-top-24">CALL : 411-009-872-333</a>
                                            </div>                                      
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div> 
                    <div className="slider_item_container" data-bg_img="./images/home_1_slider_2.jpg" data-bg_color="#555555" data-bg_opacity="0.0" >
                        <div className="item">
                            <div className="slider-content">
                                <div className="container text-left">
                                    <div className="row">
                                        <div className="slider-bg" data-animation-in="zoomInUp" data-animation-out="zoomInDown">                                    
                                            <div className="col-sm-12 wow fadeInDown" data-wow-duration="1s">
                                                <h3>Donate blood,save life !</h3>
                                                <h2>DONATE BLOOD<br/>AND INSPIRES OTHERS.</h2>
                                                <a href="#" className="btn btn-theme margin-top-24">Donate Now</a>
                                            </div>                                            
                                        </div> 
                                    </div> 
                                </div>
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div>

        );
    }
}

export default Banner;
