import React, { Component } from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from '../views/demos/Home';
import Page1  from '../views/demos/Page1';
import Page2 from '../views/demos/Page2';

class Routers extends Component {
    render () {
        return(
            <Switch>
            {/* pc端的demo */}
               <Home>
                   <Route path='/page1' component={Page1}></Route>
                   <Route path= '/page2' component= {Page2}></Route>
               </Home> 
            </Switch>
        )
    }
}

export default Routers;
