import React,{Component} from 'react';
import Navigation from './Navigation';
import './App.css';
import { Link } from '@reach/router';


class AboutUs extends Component{
    render(){
        const style={
            marginLeft: '25',
            width:'90%'
        }
        return(
            <div>
                <Navigation />
                <div className="item-list ml-3" style={style}>
                    <p><b><i>i</i>Find</b> is an online platform that you can search for places to eat or enjoy your 
                    favorite hobbies at your convenient location.</p> 
                    
                    <Link to="/" className="btn btn-outline-primary mr-2">
                         Search Now
                    </Link>
                </div>

            </div>
        );
       
    }
}

export default AboutUs; 