import React, { Component } from 'react';
import Banner from './banner';
import HomeContent from './contents';

class Home extends Component {
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "/js/custom-scripts.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                <Banner />
                <HomeContent />
            </div>
        );
    }
}

export default Home;
