import React, { Component } from 'react';
import Contact from './contact/contact-us';
import Home from './home-page/home';
import { Route, Redirect,Switch} from 'react-router-dom';
import Process from './process/process';
class MyRouting extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/process' component={Process} />
                    <Route path='/*'>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default MyRouting;