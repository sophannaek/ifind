import React,{Component} from 'react'; 
import './App.css';
class Weather extends Component{
   
    render(){
        
        const temperature = this.props.temperature; 
        const location = this.props.location; 
        const imgURL = `owf owf-${temperature.id} owf-2x`;

        return (
            <div className="weatherTab" >
                <p>{location}</p>
                <i className={imgURL}></i>
                <p>{temperature.temp} <sup>o</sup>F </p>
               
               
            </div>
        );
    }
}

export default Weather; 