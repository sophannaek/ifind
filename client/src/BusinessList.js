import React, {Component} from 'react';
import {FiPhone} from 'react-icons/fi';
import {FaHome} from 'react-icons/fa';
import { Rating } from '@material-ui/lab';



class BusinessList extends Component{

    render(){
        const businesses = this.props.businesses;
        const displayBusiness = businesses.map(item => {
            return (
                <div  className="row item-list" key={item.businessID}>
                    <div className="col-sm-5">
                        <img src={item.businessImage} className="image rounded float-center"  alt="..." />

                    </div>
                    <div className="col-sm-7">
                       
                      
                        <h3>{item.businessName}</h3>
                        <p><Rating name="half-rating" defaultValue={item.businessRating} precision={0.1}  readOnly/> ({item.businessReviewCount}) </p>
                        <p><FiPhone size={20}/>  {item.businessPhone}</p>
                        <p><FaHome size={20}/> {item.businessAddress}</p>
                        <p> Business: 
                            {
                                item.businessIsClosed ? " Now Closed" : " Now Open"
                            }
                            
                        </p>
                        {/* <p>Delivery: {
                                item.businessDelivery ? "Yes" : "Not currently Available"
                            }
                            
                        
                        </p> */}
                        <p><a href={item.businessLink}>See store's website </a></p>
                        
                    </div>
                    
                </div>
            
            )
        })

        return(
            <div className="row justify-content-center">
                {displayBusiness}

               
            </div>
        );
    }
}

export default BusinessList; 


