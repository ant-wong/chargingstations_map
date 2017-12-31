import React from 'react';
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div className="navbar navbar-inverse" id="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <Link to="/">
                        <img src="./images/navlogo.svg"
                            width="70" 
                            height="70" 
                            className="d-inline-block align-top" 
                            alt="Brand" />
                    </Link>

                    <span>Vancity Street Eats</span>

                    <Link to="/vancouver" className="link">
                        <span >The City</span>
                    </Link>
                    <Link to="/map" className="link">
                    <span>Map</span>
                    </Link>

                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;