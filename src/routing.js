import React, { Component } from 'react';
import Contact from './contact/contact-us';
import Home from './home-page/home';
import { Route, Redirect,Switch} from 'react-router-dom';
class MyRouting extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/contact' component={Contact} />
                    <Route path='/*'>
                        <Redirect to='/' />
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default MyRouting;