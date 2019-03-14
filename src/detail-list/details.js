import React, { Component } from 'react';

class Details extends Component {
    constructor(){
        super();
        const url=window.location.pathname;
        const id=url.replace("/details/",'');
        this.state={
            pageId: id,
        }
    }

    render() {
        return (
            <h1>List of groups {this.state.pageId}</h1>
        );
    }
}

export default Details;
