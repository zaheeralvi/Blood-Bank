import React, { Component } from 'react';
import Banner from './banner';
import HomeContent from './contents';

class Home extends Component {
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
