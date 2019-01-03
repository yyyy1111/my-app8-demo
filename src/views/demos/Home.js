import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
           <div>
               <h2>Home</h2>
               <ul>
                   <li>
                        <Link to="/page1">Page1</Link>  
                   </li>
                   <li>
                        <Link to="/page2">Page2</Link>
                   </li>
               </ul>
               {this.props.children}
           </div> 
        )
    }

}

export default Home;