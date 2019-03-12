import React, { Component } from 'react';

class HomeContent extends Component {
    render() {
        return (
            <section className="section-content-block section-secondary-bg">
                <div className="container wow fadeInUp animated">
                    <div className="row section-heading-wrapper">
                        <div className="col-md-12 col-sm-12 text-center">
                            <h2>Blood Do</h2>   
                            <h4>We have been working since 2019 with a prestigious vision to helping patient to provide blood.</h4>
                        </div> 
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="counter-block-1">
                                <img src='./images/o+.png' className='img-responsive' />
                                <span className="counter">2578</span>                            
                                <h4 className="text-capitalize">Success Smile</h4>
                            </div>
                        </div> 
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="counter-block-1">
                                <img src='./images/a+.png' className='img-responsive' />
                                <span className="counter">3235</span>                            
                                <h4 className="text-capitalize">Happy Donors</h4>
                            </div>
                        </div> 
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="counter-block-1">
                            <img src='./images/b+.png' className='img-responsive' />
                                <span className="counter">3568</span>                             
                                <h4 className="text-capitalize">Happy Recipient</h4>
                            </div>
                        </div> 
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="counter-block-1">
                                <img src='./images/ab+.png' className='img-responsive' />
                                <span className="counter">1364</span>                            
                                <h4 className="text-capitalize">Total Awards</h4>
                            </div>
                        </div> 
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="counter-block-1">
                                <img src='./images/o-.png' className='img-responsive' />
                                <span className="counter">2578</span>                            
                                <h4 className="text-capitalize">Success Smile</h4>
                            </div>
                        </div> 
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="counter-block-1">
                                <img src='./images/a-.png' className='img-responsive' />
                                <span className="counter">3235</span>                            
                                <h4 className="text-capitalize">Happy Donors</h4>
                            </div>
                        </div> 
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="counter-block-1">
                            <img src='./images/b-.png' className='img-responsive' />
                                <span className="counter">3568</span>                             
                                <h4 className="text-capitalize">Happy Recipient</h4>
                            </div>
                        </div> 
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="counter-block-1">
                                <img src='./images/ab-.png' className='img-responsive' />
                                <span className="counter">1364</span>                            
                                <h4 className="text-capitalize">Total Awards</h4>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </section>
        );
    }
}

export default HomeContent;
