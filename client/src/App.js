import React, {Component} from 'react';
import './App.css';
import AboutUs from './AboutUs';
import Home from './Home';
import {Router} from '@reach/router';

class App extends Component{
  
  render(){
    return(
      <div className="App" >

        <Router>
          <Home path='/' />
          <AboutUs path='/aboutus' />
        </Router>
        
        <p></p>
       
       
      </div>
    )
    
  }
}

export default App;


