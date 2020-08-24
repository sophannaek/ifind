import React, {Component} from 'react';
import axios from 'axios';
import BusinessList from './BusinessList';
import Weather from './Weather';


const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;
const Weather_API_key = process.env.REACT_APP_OPENWEATHERMAP_API_KEY; 

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
          keyword: '',
          location:'',
          business:[],
          temperature:''
        }
        this.onChangeKeyword = this.onChangeKeyword.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    onChangeKeyword(e){
        this.setState({
          keyword: e.target.value
        })
      }
  
      onChangeLocation(e){
        this.setState({
          location: e.target.value
        })
      }
      handleSubmit(e){
        e.preventDefault(); 
        const config = {
          headers: {
              'Authorization': `Bearer ${YELP_API_KEY}`
          },
          params: {
              term: this.state.keyword,
              location: this.state.location
          }
        };
        //search for keywords using Yelp API
        axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', config)
         .then(
             response => {
             
              // this.callback(response.data.businesses);
              const lists = response.data.businesses;
              console.log(response.data)//list of business, region ...
              console.log(lists)//list of 20 business only 
              let list=[];
             
              for(let item in lists){
                console.log(lists[item])//it works here 
                 const address=lists[item].location.display_address[0] +" "+ lists[item].location.display_address[1] 
                 ;
                list.push({
                  businessID: item, 
                  businessName: lists[item].name,
                  businessDisplayPhone: lists[item].display_phone,
                  businessPhone: lists[item].phone,
                  businessImage: lists[item].image_url,
                  businessIsClosed: lists[item].is_closed, 
                  businessRating: lists[item].rating,
                  businessReviewCount: lists[item].review_count,
                  businessPrice: lists[item].businessPrice,
                  businessAddress: address,
                  businessLink: lists[item].url,
                  businessDelivery: lists[item].transactions[1]
  
  
                })
              }
              this.setState({
                business: list
              }); 
            }
              
           );
  
  
        //weather app 
        //url = api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}
        const weather_key = {
          params: {
              q: this.state.location,
              appid: `${Weather_API_key}`
          }
        }
  
        axios.get('http://api.openweathermap.org/data/2.5/weather', weather_key)
        .then(response => {
            console.log(response)
            const weather = response.data
            const temp={
              description: weather.weather[0].description,
              id: weather.weather[0].id,
              temp: weather.main.temp
            }
            this.setState({temperature: temp})
        });
  
    
      }
    
      //works
      // callback(data){
      //   console.log(data);
      // }
   
  
  
  

    render(){
        return(
            <div className="container-fluid ">  
            <div className="row">
            <div className="col-sm-10">
                <form className="form-inline justify-content-center" onSubmit={this.handleSubmit}>
                

                {/* <label class="sr-only" for="inlineFormInputGroupUsername2">Find</label> */}
                <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">Find</div>
                </div>
                <input type="text" 
                    className="form-control" 
                    id="inlineFormInputGroupUsername2" 
                    value={this.state.keyword}
                    onChange={this.onChangeKeyword}
                    placeholder="Do Something" />
                </div>
                {/* <label class="sr-only" for="inlineFormInputGroupUsername2">Location</label> */}
                <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                    <div className="input-group-text">Location</div>
                </div>
                <input type="text" 
                    className="form-control" 
                    id="inlineFormInputGroupUsername2" 
                    value={this.state.location}
                    onChange={this.onChangeLocation}
                    placeholder="Zip code or City"
                    />
                </div>
                <button type="submit" className="btn btn-light mb-2">Search</button>
                </form>
            </div>
            <div className="col-sm-2">
            {this.state.temperature != 0? (
                <Weather 
                    temperature ={this.state.temperature}
                    location={this.state.location}
                />
            ):''}
            
            </div>
            </div>
            
            
        
            <div>
            
            {this.state.business.length !==0 ? (
                <h1> Top 20 Best Businesses</h1>
            ) :''
            }
            <BusinessList 
                businesses ={this.state.business}
            />
            

            </div>
        </div>
        
        );
        
    
        
    }
}

export default Search; 