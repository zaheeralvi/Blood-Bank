import React, { Component } from 'react';
import CountUp from 'react-countup';
import { NavLink } from 'react-router-dom';

class HomeContent extends Component {
  
    render() {
        return (   
            <div>
                <section className="section-content-block section-secondary-bg">
                    <div className="container wow fadeInUp animated">
                        <div className="row section-heading-wrapper">
                            <div className="col-md-12 col-sm-12 text-center">
                                <h2>Blood Doners</h2>   
                                <h4>We have been working since 2019 with a prestigious vision to helping patient to provide blood.</h4>
                            </div> 
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <NavLink to='/details/1'>
                                    <div className="counter-block-1">
                                        <img src='./images/o+.png' className='img-responsive' />
                                        <span className="counter"><CountUp end={2578} /></span>                            
                                        <h4 className="text-capitalize">O+ Donors</h4>
                                    </div>
                                </NavLink>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <NavLink to='/details/2'>
                                    <div className="counter-block-1">
                                        <img src='./images/a+.png' className='img-responsive' />
                                        <span className="counter"><CountUp end={3235} /></span>                            
                                        <h4 className="text-capitalize">A+ Donors</h4>
                                    </div>
                                </NavLink>    
                            </div> 
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <NavLink to='/details/3'>
                                    <div className="counter-block-1">
                                        <img src='./images/b+.png' className='img-responsive' />
                                        <span className="counter"><CountUp end={3568} /></span>                             
                                        <h4 className="text-capitalize">B+ Donors</h4>
                                    </div>
                                </NavLink>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <NavLink to='/details/4'>
                                    <div className="counter-block-1">
                                        <img src='./images/ab+.png' className='img-responsive' />
                                        <span className="counter"><CountUp end={1364} /></span>                            
                                        <h4 className="text-capitalize">AB+ Donors</h4>
                                    </div>
                                </NavLink>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <NavLink to='/details/5'>
                                    <div className="counter-block-1">
                                        <img src='./images/o-.png' className='img-responsive' />
                                        <span className="counter"><CountUp end={2578} /></span>                            
                                        <h4 className="text-capitalize">O- Donors</h4>
                                    </div>
                                </NavLink>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <NavLink to='/details/6'>
                                    <div className="counter-block-1">
                                        <img src='./images/a-.png' className='img-responsive' />
                                        <span className="counter"><CountUp end={3235} /></span>                            
                                        <h4 className="text-capitalize">A- Donors</h4>
                                    </div>
                                </NavLink>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <NavLink to='/details/7'>
                                    <div className="counter-block-1">
                                    <img src='./images/b-.png' className='img-responsive' />
                                        <span className="counter"><CountUp end={3568} /></span>                             
                                        <h4 className="text-capitalize">B- Donors</h4>
                                    </div>
                                </NavLink>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <NavLink to='/details/8'>
                                    <div className="counter-block-1">
                                        <img src='./images/ab-.png' className='img-responsive' />
                                        <span className="counter"><CountUp end={1364} /></span>                            
                                        <h4 className="text-capitalize">Ab- Donors</h4>
                                    </div>
                                </NavLink>
                            </div> 
                        </div> 
                    </div> 
                </section>  
                <section class="section-content-block section-custom-bg section-custom-bg-extra-padding" data-bg_img='images/appointment_female_bg.jpg' data-bg_color='#000000' data-bg_opacity='0.1'>
                    <div class="container">
                        <div class="custom-empty-space" data-height="160px" data-class="col-sm-hidden"></div>
                    </div>
                </section>
                <section className="section-content-block section-secondary-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">                      
                                <div className="row section-heading-wrapper">
                                    <div className="col-md-12 col-sm-12 text-left no-img-separator">
                                        <h4>Good To Know</h4>
                                        <span className="heading-separator heading-separator-horizontal"></span>
                                        <h2>Helpful Information</h2>
                                    </div>
                                </div>
                                <div className="about-details"> 
                                    <ul className="custom-bullet-list text-left">
                                        <li>Maintain a healthy iron level by eating iron rich foods.</li>
                                        <li>Drink an extra 16 oz. of water prior to your donation.</li>
                                        <li>Avoid alcohol consumption before your blood donation.</li>
                                        <li>Remember to bring the donor card or national ID/Passport.</li>
                                        <li>Finally, Try to get a good night sound sleep after donation.</li>
                                    </ul>
                                </div>        
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 margin-top-appointment-reverse"> 
                                <div className="appointment-form-wrapper theme-custom-box-shadow text-center clearfix wow zoomIn animated">
                                    <h3 className="join-heading join-heading-alt">Request Appointment</h3>
                                    <form className="appoinment-form"> 
                                        <div className="form-group col-md-6">
                                            <input id="your_name" className="form-control" placeholder="Name" type="text" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input id="your_email" className="form-control" placeholder="Email" type="email" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input id="your_phone" className="form-control" placeholder="Phone" type="text" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <div className="select-style">                                    
                                                <select className="form-control" name="your_center">
                                                    <option>Donation Center</option>
                                                    <option>Los Angles</option>
                                                    <option>California</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input id="your_date" className="form-control" placeholder="Date" type="text" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <input id="your_time" className="form-control" placeholder="Time" type="text" />
                                        </div>
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <textarea id="textarea_message" className="form-control" rows="4" placeholder="Your Message..."></textarea>
                                        </div>         
                                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                            <button id="btn_submit" className="btn btn-theme" type="submit">Get Appointment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </section>
            </div>
        );
    }
}

export default HomeContent;
