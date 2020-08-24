import React, { Component } from 'react';
import {Link} from '@reach/router';

class Navigation extends Component{
    render(){
        const navStyle={
            borderBottomColor: 'black',
            borderBottomWidth:2
        };
        const anchor={
            color:"white"
        };
        return (
            <nav className="site-nav family-sans navbar navbar-expand navbar-light higher" style={navStyle}>
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand" style={anchor}>
                        <i>i</i>Find
                    </Link>

                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link" to='/' style={anchor}>
                            Home
                        </Link>
                        <Link className="nav-item nav-link" to='/aboutus' style={anchor}>
                            About Us 
                        </Link>
                        <Link className="nav-item nav-link" to='/blog' style={anchor}>Blog</Link>
                    </div>
                </div>
               
            </nav>
        );

    }
}

export default Navigation;